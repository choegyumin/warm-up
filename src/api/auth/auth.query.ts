import { makeQueryKey } from '@/services/api/queries/key';
import { domain } from './shared';

export const login = () => makeQueryKey({ domain, resource: 'login' });
