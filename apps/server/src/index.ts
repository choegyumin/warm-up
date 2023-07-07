import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from 'api/server';

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3001);
