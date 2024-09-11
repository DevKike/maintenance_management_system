import { Response } from "express";
import { HttpStatusCode } from "../httpStatus/HttpStatusCode";
import { Message } from "../messages/Message";

export interface IResponse {
  manageResponse(promise: Promise<any>, res: Response, statusCode: HttpStatusCode, message: Message): Promise<void>;
}
