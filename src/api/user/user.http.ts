import httpClient from '@/services/api/https/client';
import { HTTPResponse } from '@/services/api/https/interface';
import { User } from '@/types/User';
import { makePath } from './shared';

export const getProfile = () => httpClient.get<never, HTTPResponse<User>>(makePath('profile'));
