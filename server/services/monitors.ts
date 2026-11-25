import { createError } from "h3";
import type { z } from "zod";
import { prisma, getDemoUser } from "../database/client";
import { publicTarget } from "../monitoring/http/target";
import type { monitorSchema } from "../validators/monitor";

export function listMonitors() {
  return prisma.monitor.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      checks: { orderBy: [{ checkedAt: "desc" }, { id: "desc" }], take: 1 },
    },
  });
}

export async function getMonitor(id: string | undefined) {
  const monitor = id
    ? await prisma.monitor.findUnique({ where: { id } })
    : null;
  if (!monitor)
    throw createError({ statusCode: 404, message: "Монитор не найден" });
  return monitor;
}

export async function createMonitor(data: z.infer<typeof monitorSchema>) {
  try {
    await publicTarget(data.url);
  } catch (error) {
    throw createError({ statusCode: 400, message: (error as Error).message });
  }
  const user = await getDemoUser();
  return prisma.monitor.create({ data: { ...data, userId: user.id } });
}

export async function setMonitorActive(
  id: string | undefined,
  isActive: boolean,
) {
  const monitor = await getMonitor(id);
  return prisma.monitor.update({
    where: { id: monitor.id },
    data: { isActive },
  });
}

export async function deleteMonitor(id: string | undefined) {
  const monitor = await getMonitor(id);
  await prisma.monitor.delete({ where: { id: monitor.id } });
  return { ok: true };
}
