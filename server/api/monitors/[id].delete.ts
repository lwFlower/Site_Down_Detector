import { getMonitor } from "../../utils/monitor";
import { prisma } from "../../utils/prisma";
export default defineEventHandler(async (event) => {
  const monitor = await getMonitor(event);
  await prisma.monitor.delete({ where: { id: monitor.id } });
  return { ok: true };
});
