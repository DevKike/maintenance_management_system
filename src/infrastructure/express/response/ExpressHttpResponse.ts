import { Response } from "express";
import { IHttpResponse } from "../interfaces/http/IHttpResponse";
import { HttpStatusCode } from "../http/HttpStatusCode";

export class ExpressHttpResponse implements IHttpResponse {
  constructor(private readonly response: Response) {}

  statusCode(statusCode: HttpStatusCode): IHttpResponse {
    this.response.status(statusCode);
    return this;
  }

  json(body: any): void {
    this.response.json(body);
  }
}
