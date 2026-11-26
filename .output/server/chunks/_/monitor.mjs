import { z } from 'zod';
import { h as createError } from './nitro.mjs';

const monitorSchema = z.object({
  name: z.string().trim().min(1, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435").max(100),
  url: z.url("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u043B\u043D\u044B\u0439 URL").max(2048).refine((value) => {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) && !url.username && !url.password;
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 http:// \u0438\u043B\u0438 https:// \u0431\u0435\u0437 \u043B\u043E\u0433\u0438\u043D\u0430 \u0438 \u043F\u0430\u0440\u043E\u043B\u044F \u0432 URL"),
  intervalSec: z.number().int().min(30, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u2014 30 \u0441\u0435\u043A\u0443\u043D\u0434").max(86400),
  isActive: z.boolean().optional()
});
function parse(schema, value) {
  var _a, _b;
  const result = schema.safeParse(value);
  if (!result.success)
    throw createError({
      statusCode: 400,
      message: (_b = (_a = result.error.issues[0]) == null ? void 0 : _a.message) != null ? _b : "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
    });
  return result.data;
}
const historyQuerySchema = z.object({
  page: z.coerce.number().int().min(1).max(1e5).default(1),
  days: z.coerce.number().int().refine((n) => [1, 7, 30].includes(n), "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 1, 7 \u0438\u043B\u0438 30 \u0434\u043D\u0435\u0439").default(7)
});
const activitySchema = z.object({ isActive: z.boolean() });

export { activitySchema as a, historyQuerySchema as h, monitorSchema as m, parse as p };
//# sourceMappingURL=monitor.mjs.map
