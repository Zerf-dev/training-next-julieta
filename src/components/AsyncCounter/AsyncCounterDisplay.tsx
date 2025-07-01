'use client';

import { useHydratableStore } from '@/lib/hooks/hydration/useHydratableStore';
import { useAsyncCounterStore } from '@/lib/stores/asyncCounter';

export function AsyncCounterDisplay() {
  const count = useHydratableStore(useAsyncCounterStore, ({ count }) => count);
  return <p>The count is: {count}</p>;
}
