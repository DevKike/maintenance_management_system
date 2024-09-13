import { HttpStatusCode } from "../express/http/HttpStatusCode";

export interface IHttpResponse {
  statusCode(code: HttpStatusCode): IHttpResponse;
  json(body: any): void;
}
