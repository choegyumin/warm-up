import backoff from './backoff';
import randomBetween from './randomBetween';

/**
 * Backoff with Full Jitter
 * See {@link https://aws.amazon.com/ko/blogs/architecture/exponential-backoff-and-jitter/}
 */
export default function backoffWithJitter(attempt: number, base: number, cap: number) {
  return randomBetween(base, backoff(attempt, base, cap));
}
