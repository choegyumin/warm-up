import Dialog from '@/components/Dialog';
import NoteEditor from '@/components/NoteEditor';
import NoteItem from '@/components/NoteItem';
import NoteList from '@/components/NoteList';
import * as styles from '@/pages/index.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

const MOCK_NOTE_ID = 'MOCK_NOTE_ID';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>warm-up</title>
        <meta name="description" content="손 풀기 프로그래밍" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={styles.main}>
        <NoteList>
          <NoteItem
            href={`/?edit=${MOCK_NOTE_ID}`}
            as={`/edit/${MOCK_NOTE_ID}`}
            heading="다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파."
            body="다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파."
          />
          <NoteItem
            href={`/?edit=${MOCK_NOTE_ID}`}
            as={`/edit/${MOCK_NOTE_ID}`}
            heading="다람쥐 헌 쳇바퀴에 타고파."
            body="다람쥐 헌 쳇바퀴에 타고파."
          />
          <NoteItem
            href={`/?edit=${MOCK_NOTE_ID}`}
            as={`/edit/${MOCK_NOTE_ID}`}
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <NoteItem href={`/?edit=${MOCK_NOTE_ID}`} as={`/edit/${MOCK_NOTE_ID}`} heading="Lorem Ipsum" body="Lorem Ipsum" />
        </NoteList>
      </main>
      <Dialog open={router.query.edit != null} escape={true} onClose={() => router.push('/')}>
        <NoteEditor
          defaultHeading="다람쥐 헌 쳇바퀴에 타고파."
          defaultBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Dialog>
    </>
  );
}
