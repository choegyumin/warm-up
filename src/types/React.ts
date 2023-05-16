// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnpackedHTMLFactoryAttributes<F> = F extends React.DetailedHTMLFactory<infer P, any> ? P : never;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnpackedHTMLFactoryElement<F> = F extends React.DetailedHTMLFactory<any, infer T> ? T : never;

export type ReactHTMLAttributes<T extends keyof React.ReactHTML> = UnpackedHTMLFactoryAttributes<React.ReactHTML[T]>;
export type ReactHTMLElement<T extends keyof React.ReactHTML> = UnpackedHTMLFactoryElement<React.ReactHTML[T]>;
