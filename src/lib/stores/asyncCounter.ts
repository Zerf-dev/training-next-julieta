import { CounterState } from './counter';
import { createHydratableStore } from './createHydratableStore';

type AsyncCounterState = CounterState;

export const useAsyncCounterStore = createHydratableStore<AsyncCounterState>(
  set => ({
    count: 0,
    decrement: value => set(state => ({ count: state.count - (value ?? 1) })),
    increment: value => set(state => ({ count: state.count + (value ?? 1) })),
    reset: () => set({ count: 0 }),
    setCount: count => set({ count })
  }),
  {
    name: 'async-counter-store'
  }
);
