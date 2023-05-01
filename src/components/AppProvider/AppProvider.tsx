import queryClient from '@/services/api/queries/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { AppProviderProps } from './types';

const AppProvider: React.FC<AppProviderProps> = (props) => {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
AppProvider.displayName = 'AppProvider';

export default AppProvider;
