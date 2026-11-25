import { prisma } from "../database/client";
import { statusChanged } from "./helpers";
import type { ProbeResult } from "./http/probe";

export async function saveCheckResult(monitorId: string, result: ProbeResult) {
  const next = result.isUp ? "UP" : "DOWN";
  const checkedAt = new Date();
  const notification = await prisma.$transaction(async (tx) => {
    const latest = await tx.monitor.findUnique({
      where: { id: monitorId },
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
  return notification;
}
