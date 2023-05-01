import axios, { AxiosError, AxiosHeaders, AxiosResponse, HttpStatusCode, InternalAxiosRequestConfig } from 'axios';
import { HTTPError, HTTPResponse, ResponseHeaders } from './interface';

const httpClient = axios.create();

const onRequestFulfilled = async (config: InternalAxiosRequestConfig) => config;

const onRequestRejected = (error: unknown) => Promise.reject(error);

const onResponseFulfilled = (response: AxiosResponse) => {
  const { status, data } = response;
  /** @todo 런타임 타입 검증 */
  const headers = AxiosHeaders.from(response.headers as AxiosHeaders).toJSON() as ResponseHeaders;
  // 응답 이후로는 Axios 인터페이스에 대한 의존성을 제거
  return new HTTPResponse(status, data, headers, response) as unknown as AxiosResponse;
};

/** @todo 서버 코드 작성 후 추가 구현 */
const onResponseRejected = (_error: unknown) => {
  try {
    const error = _error as AxiosError;
    if (error.code === 'ECONNREFUSED') {
      throw new HTTPError(HttpStatusCode.BadGateway, error);
    }
    throw new HTTPError(error.response?.status ?? HttpStatusCode.BadRequest, error);
  } catch (error) {
    throw new HTTPError(HttpStatusCode.BadRequest, error instanceof Error ? error : new Error('Unhandled error'));
  }
};

httpClient.interceptors.request.use(onRequestFulfilled, onRequestRejected);
httpClient.interceptors.response.use(onResponseFulfilled, onResponseRejected);

export default httpClient;
