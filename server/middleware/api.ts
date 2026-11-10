import {
  defineEventHandler,
  getHeader,
  getRequestURL,
  createError,
  setHeader,
} from "h3";

export default defineEventHandler((event) => {
  if (!event.path.startsWith("/api/")) return;
  setHeader(event, "Cache-Control", "no-store");
  // Сторонним сайтам запрещено изменять данные локального приложения.
  if (["POST", "PATCH", "DELETE", "PUT"].includes(event.method)) {
    const origin = getHeader(event, "origin");
    if (
      getHeader(event, "sec-fetch-site") === "cross-site" ||
      (origin && origin !== getRequestURL(event).origin)
    ) {
      throw createError({
        statusCode: 403,
        message: "Недопустимый источник запроса",
      });
    }
  }
});
