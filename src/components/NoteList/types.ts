import { ReactHTMLAttributes, ReactHTMLElement } from '@/types/React';

export interface NoteListProps extends ReactHTMLAttributes<'ul'> {}

export type NoteListRef = ReactHTMLElement<'ul'>;
