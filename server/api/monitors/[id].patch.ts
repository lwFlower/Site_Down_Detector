import { setMonitorActive } from "../../services/monitors";
import { parse, activitySchema } from "../../validators/monitor";
export default defineEventHandler(async (event) => {
  const { isActive } = parse(activitySchema, await readBody(event));
  return setMonitorActive(getRouterParam(event, "id"), isActive);
});
