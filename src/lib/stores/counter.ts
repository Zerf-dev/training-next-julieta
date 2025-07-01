import { createStore } from 'zustand';

export type CounterState = {
  count: number;
  decrement: (value?: number) => void;
  increment: (value?: number) => void;
  reset: () => void;
  setCount: (count: number) => void;
};

const DEFAULT_COUNTER_PROPS = {
  count: 0
} as const;

export function createCounterStore(initialProps?: Partial<Pick<CounterState, 'count'>>) {
  return createStore<CounterState>(set => ({
    ...DEFAULT_COUNTER_PROPS,
    ...initialProps,
    decrement: value => set(state => ({ count: state.count - (value ?? 1) })),
    increment: value => set(state => ({ count: state.count + (value ?? 1) })),
    setCount: count => set({ count }),
    reset: () => set({ count: initialProps?.count ?? DEFAULT_COUNTER_PROPS.count })
  }));
}
