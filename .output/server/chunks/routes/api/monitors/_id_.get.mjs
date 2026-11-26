import { p as prisma, e as uptimePercent, c as defineEventHandler, f as getQuery, g as getRouterParam } from '../../../_/nitro.mjs';
import { g as getMonitor } from '../../../_/monitors.mjs';
import { p as parse, h as historyQuerySchema } from '../../../_/monitor.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@prisma/adapter-better-sqlite3';
import 'node:url';
import '@prisma/client-runtime-utils';
import 'node:async_hooks';
import 'node:os';
import 'node:dns/promises';
import 'node:net';
import 'zod';

async function getMonitorHistory(id, page, days) {
  const monitor = await getMonitor(id);
  const now = /* @__PURE__ */ new Date();
  const since = new Date(now.getTime() - days * 864e5);
  const where = { monitorId: monitor.id, checkedAt: { gte: since, lte: now } };
  const pageSize = 10;
  const result = await prisma.$transaction(
    async (tx) => {
      const total = await tx.check.count({ where });
      const up = await tx.check.count({ where: { ...where, isUp: true } });
      const avg = await tx.check.aggregate({
        where,
        _avg: { responseMs: true }
      });
      const checks = await tx.check.findMany({
        where,
        orderBy: [{ checkedAt: "desc" }, { id: "desc" }],
        skip: (page - 1) * pageSize,
        take: pageSize
      });
      const notifications = await tx.notification.findMany({
        where: { monitorId: monitor.id, createdAt: { gte: since, lte: now } },
        orderBy: { createdAt: "desc" },
        take: 20
      });
      return {
        checks,
        notifications,
        total,
        uptime: uptimePercent(up, total),
        averageMs: avg._avg.responseMs
      };
    },
    { isolationLevel: "Serializable" }
  );
  return {
    monitor,
    ...result,
    page,
    pageSize,
    totalPages: Math.ceil(result.total / pageSize),
    since,
    until: now
  };
}

const _id__get = defineEventHandler((event) => {
  const { page, days } = parse(historyQuerySchema, getQuery(event));
  return getMonitorHistory(getRouterParam(event, "id"), page, days);
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
