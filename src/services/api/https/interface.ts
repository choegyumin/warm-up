export type HeaderValue = string | string[] | number | boolean | null;

export type ResponseHeaders = DynamicRecord<HeaderValue>;

export type SuccessfulResponseBody<T = null> = T;
export type ErrorResponseBody = { message: string };
export type ResponseBody<T = null> = SuccessfulResponseBody<T> | ErrorResponseBody;

// type OriginalResponse<T = null> = {
//   status: number;
//   headers: ResponseHeaders;
// } & ({ body?: never; data: SuccessfulResponseBody<T> } | { body: SuccessfulResponseBody<T>; data?: never });

// export class HTTPResponse<T = null, N extends OriginalResponse<T> = AxiosResponse<T>>;
export class HTTPResponse<T = null, N = unknown> {
  public readonly status: number;
  public readonly body: SuccessfulResponseBody<T>;
  public readonly headers: ResponseHeaders;
  public readonly originalResponse?: N;

  constructor(status: number, body: SuccessfulResponseBody<T>, headers: ResponseHeaders, response?: N) {
    this.status = status;
    this.body = body;
    this.headers = headers;
    this.originalResponse = response;
  }

  static isOk(error: unknown): error is HTTPResponse {
    return error instanceof HTTPResponse && error.status >= 200 && error.status < 300;
  }

  isOk() {
    return HTTPResponse.isOk(this);
  }
}

export class HTTPError extends Error implements ErrorResponseBody {
  public readonly status: number;
  public readonly message: string;
  public readonly originalError: unknown;

  constructor(status: number, error: ErrorResponseBody) {
    super(error.message);
    this.status = status;
    this.message = error.message;
    this.originalError = error;
  }

  static isClientError(error: unknown): error is HTTPError {
    return error instanceof HTTPError && error.status >= 400 && error.status < 500;
  }

  isClientError() {
    return HTTPError.isClientError(this);
  }

  static isServerError(error: unknown): error is HTTPError {
    return error instanceof HTTPError && error.status >= 500 && error.status < 600;
  }

  isServerError() {
    return HTTPError.isServerError(this);
  }
}
