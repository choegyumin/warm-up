import httpClient from '@/services/api/https/client';
import { HTTPResponse } from '@/services/api/https/interface';
import { makePath } from './shared';

export const login = () => httpClient.post<never, HTTPResponse<{ accessToken: string }>>(makePath('login'));
