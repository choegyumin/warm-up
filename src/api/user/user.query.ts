import { makeQueryKey } from '@/services/api/queries/key';
import { domain } from './shared';

export const ALL = () => makeQueryKey({ domain });
export const PROFILES = () => makeQueryKey({ ...ALL().options, resource: 'profile' });

export const getProfile = () => makeQueryKey({ ...PROFILES().options });
// export const getSampleProfile = (id: string) => makeQueryKey({ ...PROFILES().options, params: [id] });
