import { z } from "zod";
import { getMonitor } from "../../utils/monitor";
import { prisma } from "../../utils/prisma";
import { parse } from "../../utils/validation";
export default defineEventHandler(async (event) => {
  const monitor = await getMonitor(event);
  const data = parse(
    z.object({ isActive: z.boolean() }),
    await readBody(event),
  );
  return prisma.monitor.update({ where: { id: monitor.id }, data });
});
