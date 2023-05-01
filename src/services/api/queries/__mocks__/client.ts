import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      retry: 0,
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

export default queryClient;
