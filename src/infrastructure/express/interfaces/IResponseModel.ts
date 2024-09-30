import { Response } from "express";
import { HttpStatusCode } from "../../../domain/enums/httpStatusCode/HttpStatusCode";
import { Message } from "../../../domain/enums/message/Message";

export interface IResponseModel {
  manageResponse(
    promise: Promise<any>,
    res: Response,
    statusCode: HttpStatusCode,
    message: Message
  ): Promise<void>;
}
