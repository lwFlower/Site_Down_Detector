export function errorMessage(error: unknown) {
  const e = error as { data?: { message?: string; statusMessage?: string } };
  return (
    e.data?.message ||
    e.data?.statusMessage ||
    "Не удалось выполнить запрос. Попробуйте ещё раз."
  );
}
