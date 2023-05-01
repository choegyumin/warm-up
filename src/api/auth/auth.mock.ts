import { ok } from '@/services/api/mocks/context';
import { rest } from 'msw';
import { makePath } from './shared';

export const login = {
  default: rest.post(makePath('login'), (req, res, ctx) => {
    /**
     * @todo 토큰 매니저 구현
     * @todo JWT 적용
     */
    const accessToken = 'MOCK_ACCESS_TOKEN';
    sessionStorage.setItem('accessToken', accessToken);
    return res(ok(true), ctx.json({ accessToken }));
  }),
};
