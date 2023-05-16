import React from 'react';
import * as styles from './NoteList.css';
import { NoteListProps, NoteListRef } from './types';

const NoteList = React.forwardRef<NoteListRef, NoteListProps>((props, ref) => {
  return <ul ref={ref} {...props} css={styles.root} />;
});
NoteList.displayName = 'NoteList';

export default NoteList;
