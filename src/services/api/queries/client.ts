import backoffWithJitter from '@/utils/backoffWithJitter';
import { QueryClient } from '@tanstack/react-query';

const backoffBase = 2000;
const backoffCap = 15000;
const retryDelay = (attempt: number) => backoffWithJitter(attempt, backoffBase, backoffCap);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay,
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

export default queryClient;
