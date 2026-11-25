import { getMonitor } from "./monitors";
import { prisma } from "../database/client";
import { uptimePercent } from "../monitoring/helpers";

export async function getMonitorHistory(
  id: string | undefined,
  page: number,
  days: number,
) {
  const monitor = await getMonitor(id);
  const now = new Date();
  const since = new Date(now.getTime() - days * 86400000);
  const where = { monitorId: monitor.id, checkedAt: { gte: since, lte: now } };
  const pageSize = 10;
  // Единый снимок данных: счётчики, статистика и страница согласованы.
  const result = await prisma.$transaction(
    async (tx) => {
      const total = await tx.check.count({ where });
      const up = await tx.check.count({ where: { ...where, isUp: true } });
      const avg = await tx.check.aggregate({
        where,
        _avg: { responseMs: true },
      });
      const checks = await tx.check.findMany({
        where,
        orderBy: [{ checkedAt: "desc" }, { id: "desc" }],
        skip: (page - 1) * pageSize,
        take: pageSize,
      });
      const notifications = await tx.notification.findMany({
        where: { monitorId: monitor.id, createdAt: { gte: since, lte: now } },
        orderBy: { createdAt: "desc" },
        take: 20,
      });
      return {
        checks,
        notifications,
        total,
        uptime: uptimePercent(up, total),
        averageMs: avg._avg.responseMs,
      };
    },
    { isolationLevel: "Serializable" },
  );
  return {
    monitor,
    ...result,
    page,
    pageSize,
    totalPages: Math.ceil(result.total / pageSize),
    since,
    until: now,
  };
}
