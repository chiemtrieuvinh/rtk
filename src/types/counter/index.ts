export enum CounterStatus {
  loading = "loading",
  idle = "idle",
  failed = "failed",
}

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}
