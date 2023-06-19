import { CounterState, CounterStatus } from "../../types/counter";

export const initialState: CounterState = {
  value: 0,
  status: CounterStatus.idle,
};
