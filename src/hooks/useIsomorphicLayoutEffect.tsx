import { BROWSER_ENV } from '@/utils/env';
import { DependencyList, EffectCallback, useEffect, useLayoutEffect } from 'react';

const useIsomorphicEffect = BROWSER_ENV ? useEffect : useLayoutEffect;

export default function useIsomorphicLayoutEffect(effect: EffectCallback, deps?: DependencyList): void {
  return useIsomorphicEffect(effect, deps);
}
