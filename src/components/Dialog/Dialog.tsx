import useEvent from '@/hooks/useEvent';
import useForkedRef from '@/hooks/useForkedRef';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import React from 'react';
import * as styles from './Dialog.css';
import { DialogProps, DialogRef } from './types';

const Dialog = React.forwardRef<DialogRef, DialogProps>((props, ref) => {
  const { open: shouldOpen = false, escape = false, onEscape: onEscapeProp, onClose: onCloseProp, children, ...restProps } = props;

  const rootRef = useForkedRef(ref);

  const onEscape = useEvent((event: React.SyntheticEvent<HTMLDialogElement>) => {
    if (!escape) {
      return event.preventDefault();
    }
    onEscapeProp?.(event);
  });

  const onClose = useEvent((event: React.SyntheticEvent<HTMLDialogElement>) => {
    onCloseProp?.(event);
    /**
     * 'close' 이벤트는 차단 불가능하므로, `event.preventDefault()` 대신 `showModal()` 실행
     * See {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close_event}
     * @todo 일단 써보고, 문제가 발생하면 다른 방식으로 대체
     */
    rootRef.current?.showModal();
  });

  useIsomorphicLayoutEffect(() => {
    if (rootRef.current == null) {
      return;
    }
    const open = rootRef.current.open;

    if (shouldOpen && !open) {
      return rootRef.current?.showModal();
    }
    if (!shouldOpen && open) {
      return rootRef.current?.close();
    }
  }, [shouldOpen]);

  if (!shouldOpen) {
    return null;
  }

  return (
    <dialog ref={rootRef} {...restProps} css={styles.root} onCancel={onEscape} onClose={onClose} autoFocus={false}>
      <form method="dialog">
        <button css={styles.close} type="submit" aria-label="Close">
          ✕
        </button>
      </form>
      <div css={styles.content}>{children}</div>
    </dialog>
  );
});
Dialog.displayName = 'Dialog';

export default Dialog;
