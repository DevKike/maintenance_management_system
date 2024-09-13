import { IHttpRequest } from "../../../../http/IHttpRequest";
import { IHttpResponse } from "../../../../http/IHttpResponse";

export interface IRoleController {
  getRoles(
    req: IHttpRequest,
    res: IHttpResponse,
    next: (error: Error) => void
  ): Promise<void>;
}
