import {
  APIQueryKeyWithDomain,
  APIQueryKeyWithParams,
  APIQueryKeyWithResource,
  DomainQueryKey,
  ParamsQueryKey,
  ResourceQueryKey,
} from './types';

export function makeQueryKey<Domain extends DomainQueryKey, Resource extends ResourceQueryKey, Params extends ParamsQueryKey>(options: {
  domain: Domain;
  resource: Resource;
  params: Params;
}): APIQueryKeyWithParams<Domain, Resource, Params>;
export function makeQueryKey<Domain extends DomainQueryKey, Resource extends ResourceQueryKey>(options: {
  domain: Domain;
  resource: Resource;
}): APIQueryKeyWithResource<Domain, Resource>;
export function makeQueryKey<Domain extends DomainQueryKey>(options: { domain: Domain }): APIQueryKeyWithDomain<Domain>;
export function makeQueryKey<Domain extends DomainQueryKey, Resource extends ResourceQueryKey, Params extends ParamsQueryKey>(options: {
  domain: Domain;
  resource?: Resource;
  params?: Params;
}) {
  const { domain, resource, params } = options;
  return Object.assign([domain, resource, ...(params ?? [])], { options });
}
