import Link from 'next/link';
import React from 'react';
import * as styles from './NoteItem.css';
import { NoteItemProps, NoteItemRef } from './types';

const NoteItem = React.forwardRef<NoteItemRef, NoteItemProps>((props, ref) => {
  const { heading, body, href, as, replace, scroll, shallow, passHref, prefetch, locale, ...restProps } = props;
  return (
    <li ref={ref} {...restProps} css={styles.root}>
      <Link
        css={styles.link}
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
        locale={locale}
      >
        <h2 css={styles.heading}>{heading}</h2>
        <p css={styles.body}>{body}</p>
      </Link>
    </li>
  );
});
NoteItem.displayName = 'NoteItem';

export default NoteItem;
