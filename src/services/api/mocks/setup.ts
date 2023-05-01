import { SERVER_ENV } from '@/utils/env';
import { RequestHandler } from 'msw';

/** See {@link https://www.callstack.com/blog/guide-to-mock-service-worker-msw} */
export default async function setupAPIMocks(...handlers: RequestHandler[]) {
  if (SERVER_ENV) {
    const { server } = await import('./server');
    server.use(...handlers);
  } else {
    const { worker } = await import('./browser');
    worker.use(...handlers);
  }
}
