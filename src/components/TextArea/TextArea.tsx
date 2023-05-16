import useEvent from '@/hooks/useEvent';
import useForkedRef from '@/hooks/useForkedRef';
import React, { useCallback, useEffect } from 'react';
import { TextAreaProps, TextAreaRef } from './types';

const TextArea = React.forwardRef<TextAreaRef, TextAreaProps>((props, ref) => {
  const { onChange: onChangeProp, ...restProps } = props;

  const forkedRef = useForkedRef(ref);

  const rerender = useCallback(() => {
    const element = forkedRef.current;
    if (element == null) {
      return;
    }
    // 브라우저에서 배치 업데이트하므로, observer는 한 번만 실행됨
    // 만약 마지막 값이 같다면, observer는 실행되지 않음
    // Observer  →  Assign * 2  →  Observer  →  Assign * 2 (Not changed)  →  Done!
    element.style.height = '1em';
    element.style.height = `${element.scrollHeight}px`;
  }, [forkedRef]);

  const onChange = useEvent((event) => {
    rerender();
    onChangeProp?.(event);
  });

  useEffect(() => {
    const element = forkedRef.current;
    if (element == null) {
      throw new Error('Element is not mounted.');
    }
    const observer = new ResizeObserver(rerender);
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [forkedRef, rerender]);

  return <textarea {...restProps} ref={forkedRef} onChange={onChange} />;
});
TextArea.displayName = 'TextArea';

export default TextArea;
