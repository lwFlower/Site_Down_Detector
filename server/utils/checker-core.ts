export function uptimePercent(
  successful: number,
  total: number,
): number | null {
  return total ? Math.round((successful / total) * 10000) / 100 : null;
}
export function statusChanged(previous: string, next: string) {
  return previous !== "UNKNOWN" && previous !== next;
}
// Несколько работников забирают задачи из общего массива.
export async function runPool<T>(
  items: T[],
  limit: number,
  work: (item: T) => Promise<void>,
) {
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const item = items[cursor++]!;
      await work(item);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker),
  );
}
