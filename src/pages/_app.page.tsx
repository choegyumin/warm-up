import type { AppProps } from 'next/app';
import * as styles from '@/styles/globals.css';
import { Global } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={styles.globals} />
      <Component {...pageProps} />
    </>
  );
}
