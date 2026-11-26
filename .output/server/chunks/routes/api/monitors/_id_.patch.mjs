import { c as defineEventHandler, r as readBody, g as getRouterParam } from '../../../_/nitro.mjs';
import { s as setMonitorActive } from '../../../_/monitors.mjs';
import { p as parse, a as activitySchema } from '../../../_/monitor.mjs';
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

const _id__patch = defineEventHandler(async (event) => {
  const { isActive } = parse(activitySchema, await readBody(event));
  return setMonitorActive(getRouterParam(event, "id"), isActive);
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
