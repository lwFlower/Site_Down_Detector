export type Status = "UP" | "DOWN";
export interface MonitorFormData {
  name: string;
  url: string;
  intervalSec: number;
}
export interface CheckRecord {
  id: string;
  checkedAt: string;
  isUp: boolean;
  statusCode: number;
  responseMs: number | null;
  responseSize: number | null;
  error: string | null;
}
export interface NotificationRecord {
  id: string;
  event: Status;
  createdAt: string;
}
export interface Monitor extends MonitorFormData {
  id: string;
  isActive: boolean;
  lastStatus: Status | "UNKNOWN";
  lastCheckedAt: string | null;
  demoStatus: Status;
  checks: CheckRecord[];
  notifications: NotificationRecord[];
}
export interface SavedData {
  version: 1;
  monitors: Monitor[];
}
export type MonitorSummary = Monitor;
