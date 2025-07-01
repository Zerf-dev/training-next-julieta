'use client';

import { useCounterContext } from '@/providers/CounterContext';

export function CounterDisplay() {
  const count = useCounterContext(({ count }) => count);
  return <p>The count is: {count}</p>;
}
