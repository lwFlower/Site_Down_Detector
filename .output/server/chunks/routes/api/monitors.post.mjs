import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import { c as createMonitor } from '../../_/monitors.mjs';
import { p as parse, m as monitorSchema } from '../../_/monitor.mjs';
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

const monitors_post = defineEventHandler(async (event) => {
  const data = parse(monitorSchema, await readBody(event));
  return createMonitor(data);
});

export { monitors_post as default };
//# sourceMappingURL=monitors.post.mjs.map
