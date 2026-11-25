import { createMonitor } from "../services/monitors";
import { parse, monitorSchema } from "../validators/monitor";
export default defineEventHandler(async (event) => {
  const data = parse(monitorSchema, await readBody(event));
  return createMonitor(data);
});
