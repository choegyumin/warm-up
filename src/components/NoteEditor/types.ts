import { ReactHTMLAttributes, ReactHTMLElement } from '@/types/React';

export interface NoteEditorProps extends ReactHTMLAttributes<'article'> {
  heading?: string;
  defaultHeading?: string;
  body?: string;
  defaultBody?: string;
  readOnly?: boolean;
  onHeadingChange?: ReactHTMLAttributes<'textarea'>['onChange'];
  onHeadingChangeCapture?: ReactHTMLAttributes<'textarea'>['onChangeCapture'];
  onBodyChange?: ReactHTMLAttributes<'textarea'>['onChange'];
  onBodyChangeCapture?: ReactHTMLAttributes<'textarea'>['onChangeCapture'];
}

export type NoteEditorRef = ReactHTMLElement<'article'>;
