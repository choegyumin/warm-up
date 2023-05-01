import { SERVER_ENV } from '@/utils/env';

export default async function initializeAPIMocks() {
  if (SERVER_ENV) {
    const { server } = await import('./server');
    await server.listen();
  } else {
    const { worker } = await import('./browser');
    await worker.start();
  }
}
