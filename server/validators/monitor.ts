import { z } from "zod";
import { createError } from "h3";

export const monitorSchema = z.object({
  name: z.string().trim().min(1, "Укажите название").max(100),
  url: z
    .url("Введите полный URL")
    .max(2048)
    .refine((value) => {
      const url = new URL(value);
      return (
        ["http:", "https:"].includes(url.protocol) &&
        !url.username &&
        !url.password
      );
    }, "Используйте http:// или https:// без логина и пароля в URL"),
  intervalSec: z
    .number()
    .int()
    .min(30, "Минимальный интервал — 30 секунд")
    .max(86400),
  isActive: z.boolean().optional(),
});
export function parse<T>(schema: z.ZodType<T>, value: unknown): T {
  const result = schema.safeParse(value);
  if (!result.success)
    throw createError({
      statusCode: 400,
      message: result.error.issues[0]?.message ?? "Некорректные данные",
    });
  return result.data;
}
export const historyQuerySchema = z.object({
  page: z.coerce.number().int().min(1).max(100000).default(1),
  days: z.coerce
    .number()
    .int()
    .refine((n) => [1, 7, 30].includes(n), "Выберите 1, 7 или 30 дней")
    .default(7),
});

export const activitySchema = z.object({ isActive: z.boolean() });
