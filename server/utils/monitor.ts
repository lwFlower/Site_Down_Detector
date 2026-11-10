import { createError, getRouterParam, type H3Event } from "h3";
import { prisma } from "./prisma";
export async function getMonitor(event: H3Event) {
  const id = getRouterParam(event, "id");
  const monitor = id
    ? await prisma.monitor.findUnique({ where: { id } })
    : null;
  if (!monitor)
    throw createError({ statusCode: 404, message: "Монитор не найден" });
  return monitor;
}
