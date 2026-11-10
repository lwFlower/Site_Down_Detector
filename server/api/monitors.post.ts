import { prisma, getDemoUser } from "../utils/prisma";
import { parse, monitorSchema } from "../utils/validation";
import { publicTarget } from "../utils/probe";
export default defineEventHandler(async (event) => {
  const data = parse(monitorSchema, await readBody(event));
  try {
    await publicTarget(data.url);
  } catch (error) {
    throw createError({ statusCode: 400, message: (error as Error).message });
  }
  const user = await getDemoUser();
  return prisma.monitor.create({ data: { ...data, userId: user.id } });
});
