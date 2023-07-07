import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from 'api/server';
import cors from 'cors';

const server = createHTTPServer({
  /** @todo */
  middleware: cors(),
  router: appRouter,
});

server.listen(3001);
