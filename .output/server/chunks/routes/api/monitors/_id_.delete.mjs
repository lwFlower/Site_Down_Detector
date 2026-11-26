import { c as defineEventHandler, g as getRouterParam } from '../../../_/nitro.mjs';
import { d as deleteMonitor } from '../../../_/monitors.mjs';
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

const _id__delete = defineEventHandler(
  (event) => deleteMonitor(getRouterParam(event, "id"))
);

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
