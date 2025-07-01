import api from '@/lib/config/api';
import type { Health } from '@/lib/types/health';

export const getHealth = async () => api.get<Health>('/health');
