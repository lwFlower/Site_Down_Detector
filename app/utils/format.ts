export function formatDate(value: string) {
  return new Date(value).toLocaleString("ru-RU", { timeZone: "UTC" });
}
export function formatSize(value: number | null) {
  return value === null ? "—" : `${value} Б`;
}
