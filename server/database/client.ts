import { resolve } from "node:path";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma/client";

const globalDb = globalThis as unknown as { prisma?: PrismaClient };
export const prisma =
  globalDb.prisma ??
  new PrismaClient({
    adapter: new PrismaBetterSqlite3({
      url: `file:${resolve("prisma/dev.db")}`,
    }),
  });
if (process.env.NODE_ENV !== "production") globalDb.prisma = prisma;

// Единственный учебный пользователь. Никаких паролей и регистрации.
export function getDemoUser() {
  return prisma.user.upsert({
    where: { email: "student@example.com" },
    update: {},
    create: { email: "student@example.com", name: "Студент" },
  });
}
