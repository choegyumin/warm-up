import { ReactHTMLAttributes, ReactHTMLElement } from '@/types/React';
import { LinkProps } from 'next/link';

export interface NoteItemProps
  extends ReactHTMLAttributes<'li'>,
    Pick<LinkProps, 'href' | 'as' | 'replace' | 'scroll' | 'shallow' | 'passHref' | 'prefetch' | 'locale'> {
  heading: string;
  body: string;
}

export type NoteItemRef = ReactHTMLElement<'li'>;
