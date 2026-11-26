import { c as defineEventHandler } from '../../_/nitro.mjs';
import { l as listMonitors } from '../../_/monitors.mjs';
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

const monitors_get = defineEventHandler(() => listMonitors());

export { monitors_get as default };
//# sourceMappingURL=monitors.get.mjs.map
