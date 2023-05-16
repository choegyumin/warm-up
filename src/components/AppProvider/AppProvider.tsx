import queryClient from '@/services/api/queries/client';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { AppProviderProps } from './types';

const AppProvider: React.FC<AppProviderProps> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </QueryClientProvider>
  );
};
AppProvider.displayName = 'AppProvider';

export default AppProvider;
