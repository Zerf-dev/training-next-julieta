'use client';

import { AsyncCounter } from '@/components/AsyncCounter';
import { Title } from '@/components/Title';
import { useStoreIsHydrated } from '@/lib/hooks/hydration/useStoreIsHydrated';
import { useAsyncCounterStore } from '@/lib/stores/asyncCounter';

export default function HydrationLoading() {
  const hydrated = useStoreIsHydrated(useAsyncCounterStore);
  return (
    <>
      <Title>NextJS React Training</Title>
      <p>While the store is loading, it will show the loading message.</p>
      {hydrated ? <AsyncCounter /> : <p>Loading async counter store...</p>}
    </>
  );
}
