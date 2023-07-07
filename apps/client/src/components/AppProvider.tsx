import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { transformer } from 'api/client';
import React, { useState } from 'react';
import { trpc } from '../utils/trpc';

const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      transformer,
      links: [
        httpBatchLink({
          url: 'http://localhost:3001',
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
AppProvider.displayName = 'AppProvider';

export default AppProvider;
