import type { ApiErrorResponse } from 'apisauce';
import { createQuery } from 'react-query-kit';

import { getHealth } from '@/lib/services/health';
import type { Health } from '@/lib/types/health';

export const useHealth = createQuery<Health | undefined, void, ApiErrorResponse<Health>>({
  primaryKey: '/health',
  queryFn: () => getHealth().then(response => response.data)
});
