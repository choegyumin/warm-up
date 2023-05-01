export type StringQueryKey = string;
export type ArrayQueryKey<T = unknown> = ReadonlyArray<T>;

export type DomainQueryKey = StringQueryKey;
export type ResourceQueryKey = StringQueryKey;
export type ParamsQueryKey<T = unknown> = ArrayQueryKey<T>;

/** See {@link https://tkdodo.eu/blog/effective-react-query-keys} */
export type APIQueryKeyWithParams<
  Domain extends DomainQueryKey,
  Resource extends ResourceQueryKey,
  Params extends ParamsQueryKey,
> = Params & {
  0: Domain;
  1: Resource;
  options: { domain: Domain; resource: Resource; params: Params };
};
export type APIQueryKeyWithResource<Domain extends DomainQueryKey, Resource extends ResourceQueryKey> = Array<undefined> & {
  0: Domain;
  1: Resource;
  options: { domain: Domain; resource: Resource };
};
export type APIQueryKeyWithDomain<Domain extends DomainQueryKey> = Array<undefined> & {
  0: Domain;
  options: { domain: Domain };
};
