import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import MyProfile from '@/components/MyProfile/MyProfile';
import * as styles from '@/styles/Home.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>warm-up</title>
        <meta name="description" content="손 풀기 프로그래밍" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className} css={styles.main}>
        <ErrorBoundary fallback={<div>Error!</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <MyProfile />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
}
