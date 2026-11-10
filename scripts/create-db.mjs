import { mkdirSync, openSync, closeSync } from "node:fs";

// Создаём пустой файл перед Prisma db push. Существующая база не очищается.
mkdirSync("prisma", { recursive: true });
closeSync(openSync("prisma/dev.db", "a"));
