import { prisma } from "./prisma";
import { probe } from "./probe";
import { runPool, statusChanged } from "./checker-core";

let running = false;
export async function checkDueMonitors() {
  if (running) return; // setInterval не запускает второй проход поверх первого.
  running = true;
  try {
    const monitors = await prisma.monitor.findMany({
      where: { isActive: true },
    });
    const now = Date.now();
    const due = monitors.filter(
      (m) =>
        !m.lastCheckedAt ||
        now - m.lastCheckedAt.getTime() >= m.intervalSec * 1000,
    );
    await runPool(due, 5, async (monitor) => {
      try {
        const current = await prisma.monitor.findUnique({
          where: { id: monitor.id },
        });
        if (!current?.isActive) return;
        const result = await probe(current.url);
        const next = result.isUp ? "UP" : "DOWN";
        const checkedAt = new Date();
        const notification = await prisma.$transaction(async (tx) => {
          const latest = await tx.monitor.findUnique({
            where: { id: current.id },
          });
          // Удалённый или поставленный на паузу монитор не записывает поздний результат.
          if (!latest?.isActive) return null;
          await tx.check.create({
            data: { monitorId: latest.id, checkedAt, ...result },
          });
          await tx.monitor.update({
            where: { id: latest.id },
            data: { lastStatus: next, lastCheckedAt: checkedAt },
          });
          if (statusChanged(latest.lastStatus, next)) {
            await tx.notification.create({
              data: { monitorId: latest.id, channel: "log", event: next },
            });
            return `[${checkedAt.toISOString()}] ${latest.name}: ${latest.lastStatus} → ${next}`;
          }
          return null;
        });
        if (notification) console.log("[monitor]", notification);
      } catch (error) {
        console.error("[checker] Ошибка монитора", monitor.id, error);
      }
    });
  } finally {
    running = false;
  }
}
