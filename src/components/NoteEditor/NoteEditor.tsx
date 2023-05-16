import React from 'react';
import * as styles from './NoteEditor.css';
import { NoteEditorProps, NoteEditorRef } from './types';
import TextArea from '../TextArea/TextArea';

const NoteEditor = React.forwardRef<NoteEditorRef, NoteEditorProps>((props, ref) => {
  const {
    heading,
    defaultHeading,
    body,
    defaultBody,
    readOnly = false,
    onHeadingChange,
    onHeadingChangeCapture,
    onBodyChange,
    onBodyChangeCapture,
    ...restProps
  } = props;

  return (
    <article ref={ref} {...restProps} css={styles.root}>
      <TextArea
        css={styles.heading}
        placeholder="Title"
        value={heading}
        defaultValue={defaultHeading}
        readOnly={readOnly}
        onChange={onHeadingChange}
        onChangeCapture={onHeadingChangeCapture}
      />
      <TextArea
        css={styles.body}
        placeholder="Write your note..."
        value={body}
        defaultValue={defaultBody}
        readOnly={readOnly}
        onChange={onBodyChange}
        onChangeCapture={onBodyChangeCapture}
        autoFocus={true}
      />
    </article>
  );
});
NoteEditor.displayName = 'NoteEditor';

export default NoteEditor;
