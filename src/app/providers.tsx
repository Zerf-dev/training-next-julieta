'use client';

import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/api';
import { ServerStatus } from '@/components/ServerStatus';
import Link from 'next/link';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={queryClient.getQueryData(['/health'])}>
        <ServerStatus />
        {children}
        <div className="flex gap-4 text-white">
          <Link className="underline" href="/">
            Go to context counter
          </Link>
          <Link className="underline" href="/hydration-loading">
            Go to hydration loading async counter
          </Link>
          <Link className="underline" href="/pop-in-hydration">
            Go to pop-in hydration async counter
          </Link>
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
}
