import { saveCheckResult } from "./save-result";
import { prisma } from "../database/client";
import { probe } from "./http/probe";
import { runPool } from "./helpers";

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
        const notification = await saveCheckResult(current.id, result);
        if (notification) console.log("[monitor]", notification);
      } catch (error) {
        console.error("[checker] Ошибка монитора", monitor.id, error);
      }
    });
  } finally {
    running = false;
  }
}
