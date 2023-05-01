import type { AppProps } from 'next/app';
import { authMockAPI, userMockAPI } from '@/api';
import AppProvider from '@/components/AppProvider';
import ErrorBoundary from '@/components/ErrorBoundary';
import setupAPIMocks from '@/services/api/mocks/setup';
import * as styles from '@/styles/globals.css';
import { Global } from '@emotion/react';
import { useEffect, useState } from 'react';

const shouldAPIMocking = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

export default function App({ Component, pageProps }: AppProps) {
  const [isAPIReady, setIsAPIReady] = useState(!shouldAPIMocking);
  const shouldRender = isAPIReady;

  /**
   * Deferred mounting
   * See {@link https://github.com/mswjs/msw/discussions/1049#discussioncomment-1941348}
   */
  useEffect(() => {
    (async () => {
      if (isAPIReady) {
        return;
      }
      const { default: initializeAPIMocks } = await import('@/services/api/mocks/initialize');
      await initializeAPIMocks();
      /** @todo 서버 구현 후 필요한 페이지에서만 Mocking 하도록 개선 */
      setupAPIMocks(...Object.values(authMockAPI).map((it) => it.default), ...Object.values(userMockAPI).map((it) => it.default));
      setIsAPIReady(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <ErrorBoundary fallback={<div>Service Error</div>}>
      <AppProvider>
        <Global styles={styles.globals} />
        <Component {...pageProps} />
      </AppProvider>
    </ErrorBoundary>
  );
}
