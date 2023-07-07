import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
App.displayName = 'App';

export default App;
