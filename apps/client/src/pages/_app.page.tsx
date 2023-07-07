import type { AppProps } from 'next/app';
import AppProvider from '../components/AppProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};
App.displayName = 'App';

export default App;
