import { baseURL } from '@/services/api/config';

export const domain = 'user';
export const makePath = (path: string) => `${baseURL}/${domain}/${path}`;
