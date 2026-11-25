import { getMonitorHistory } from "../../services/history";
import { parse, historyQuerySchema } from "../../validators/monitor";

export default defineEventHandler((event) => {
  const { page, days } = parse(historyQuerySchema, getQuery(event));
  return getMonitorHistory(getRouterParam(event, "id"), page, days);
});
