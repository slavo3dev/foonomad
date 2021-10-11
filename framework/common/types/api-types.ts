import { ApiHooks } from "./hooks";

export type ApiFetcherOptions = {
  query: string
  variables?: Variables
  url?: string
}

export type Variables = {[key: string]: string | any | undefined}

export type ApiFetcherResults<T> = {
  data: T
}

export interface ApiConfig {
  fetch: ApiFetcher
  checkoutCookie: string
  apiUrl?: string
}


export type ApiFetcher<T = any> = (
  options: ApiFetcherOptions
) => Promise<ApiFetcherResults<T>>

export interface ApiProviderContext {
  hooks: ApiHooks
  fetcher: ApiFetcher
  checkoutCookie: string
}

export interface ApiProviderContext {
  hooks: ApiHooks
  fetcher: ApiFetcher
}
