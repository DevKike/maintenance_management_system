import { Response } from "express";
import { HttpStatusCode } from "../http/HttpStatusCode";
import { MessageConstants } from "../messages/MessageConstants";

export interface IHttpResponseModel {
  manageResponse(
    promise: Promise<any>,
    res: Response,
    statusCode: HttpStatusCode,
    message: MessageConstants
  ): Promise<void>;
}
