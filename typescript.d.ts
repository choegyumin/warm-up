/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any */

/** See {@link https://typescript-eslint.io/rules/ban-types/} */
type NonNullishValue = {};
type PlainObject<T extends {} = { [P in PropertyKey]: unknown }> = { ''?: unknown } & T;
type AnyObject = object;
type ExtendableAnyObject = Record<PropertyKey, any>;
type EmptyObject = Record<PropertyKey, never>;
type ExtendableEmptyObject = PlainObject<{}>;
type UnknownObject = Partial<Record<PropertyKey, unknown>>;

type DynamicRecord<T, K extends keyof any = PropertyKey> = Partial<Record<K, T>>;
