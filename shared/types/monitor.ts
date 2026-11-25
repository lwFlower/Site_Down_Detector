// Поля API, которые используются в компонентах интерфейса.
// Даты приходят по HTTP в виде строк.
export interface MonitorFormData {
  name: string;
  url: string;
  intervalSec: number;
}
export interface MonitorSummary {
  id: string;
  name: string;
  url: string;
  isActive: boolean;
  lastStatus: string;
  checks: { responseMs: number | null }[];
}
export interface CheckRecord {
  id: string;
  checkedAt: string;
  isUp: boolean;
  statusCode: number | null;
  responseMs: number | null;
  responseSize: number | null;
  error: string | null;
}
export interface NotificationRecord {
  id: string;
  event: string;
  createdAt: string;
}
