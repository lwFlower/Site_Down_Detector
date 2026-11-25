import { deleteMonitor } from "../../services/monitors";
export default defineEventHandler((event) =>
  deleteMonitor(getRouterParam(event, "id")),
);
