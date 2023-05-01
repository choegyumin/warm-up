/**
 * Backoff
 * See {@link https://aws.amazon.com/ko/blogs/architecture/exponential-backoff-and-jitter/}
 */
export default function backoff(attempt: number, base: number, cap: number) {
  const sec = 1000;
  return Math.min(cap, (base / sec) ** attempt * sec);
}
