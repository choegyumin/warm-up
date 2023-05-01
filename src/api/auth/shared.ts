import { baseURL } from '@/services/api/config';

export const domain = 'auth';
export const makePath = (path: string) => `${baseURL}/${domain}/${path}`;
