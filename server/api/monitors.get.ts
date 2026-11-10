import { prisma } from "../utils/prisma";
export default defineEventHandler(() =>
  prisma.monitor.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      checks: { orderBy: [{ checkedAt: "desc" }, { id: "desc" }], take: 1 },
    },
  }),
);
