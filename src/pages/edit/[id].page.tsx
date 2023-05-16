import NoteEditor from '@/components/NoteEditor';
import Head from 'next/head';
import Link from 'next/link';
import * as styles from './[id].css';

export default function Home() {
  return (
    <>
      <Head>
        <title>warm-up</title>
        <meta name="description" content="손 풀기 프로그래밍" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={styles.main}>
        <NoteEditor
          defaultHeading="다람쥐 헌 쳇바퀴에 타고파."
          defaultBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          onHeadingChange={(event) => console.log(event.target.value)}
          onBodyChange={(event) => console.log(event.target.value)}
        />
        <div css={styles.footer}>
          <Link css={styles.link} href="/">
            See more
          </Link>
        </div>
      </main>
    </>
  );
}
