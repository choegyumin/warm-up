import { HttpStatusCode } from 'axios';
import { compose, context } from 'msw';

const forbiddenResolver = compose(context.status(HttpStatusCode.Forbidden), context.json({ message: 'Not authorized.' }));

export function request(status: number, authorization = false) {
  const resolver = compose(context.status(status), context.set('date', new Date().toUTCString()));

  if (!authorization) {
    return resolver;
  }

  /** @todo 토큰 매니저 구현 */
  const accessToken = sessionStorage.getItem('accessToken');
  if (accessToken == null) {
    return compose(forbiddenResolver, resolver);
  }

  return compose(context.set('Authorization', sessionStorage.getItem('accessToken') ?? ''), resolver);
}

export function ok(authorization?: boolean) {
  return compose(request(HttpStatusCode.Ok, authorization));
}

export function forbidden() {
  return forbiddenResolver;
}
