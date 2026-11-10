import { defineConfig } from "prisma/config";
import { resolve } from "node:path";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: { url: `file:${resolve("prisma/dev.db")}` },
});
