import { ResponseBody } from '@/services/api/https/interface';
import { ok } from '@/services/api/mocks/context';
import { User } from '@/types/User';
import { rest } from 'msw';
import { makePath } from './shared';

export const getProfile = {
  default: rest.get<never, never, ResponseBody<User>>(makePath('profile'), (req, res, ctx) => {
    return res(ok(true), ctx.json({ name: 'John Doe' }));
  }),
};
