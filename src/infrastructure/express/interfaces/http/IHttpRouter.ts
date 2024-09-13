import { IHttpRequest } from "./IHttpRequest";
import { IHttpResponse } from "./IHttpResponse";

export interface IHttpRouter {
  get(
    path: string,
    callback: (
      req: IHttpRequest,
      res: IHttpResponse,
      next: (error: Error) => void
    ) => void
  ): void;
  post(
    path: string,
    callback: (
      req: IHttpRequest,
      res: IHttpResponse,
      next: (error: Error) => void
    ) => void
  ): void;
}
