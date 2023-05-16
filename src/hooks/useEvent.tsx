import setRef from '@/utils/setRef';
import { useCallback, useInsertionEffect, useRef } from 'react';

/**
 * A Hook to define an event handler with an always-stable function identity.
 * See {@link https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useEvent<T extends (...args: any[]) => void>(callback: T): T {
  const callbackRef = useRef<T>(callback);
  // 이벤트 핸들러는 SSR을 고려할 필요가 없고,
  // `useLayoutEffect` 보다 더 빠른 시점에 실행하기 위해 스타일과 무관하지만 `useInsertionEffect` 를 사용
  useInsertionEffect(() => {
    setRef(callbackRef, callback);
  });
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const callbackFunction = ((...args: any[]) => callbackRef.current(...args)) as Function as T;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback<T>(callbackFunction, []);
}
