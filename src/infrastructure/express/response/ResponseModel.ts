import { Response } from "express";
import { HttpStatusCode } from "../../../domain/enums/httpStatusCode/HttpStatusCode";
import { Message } from "../../../domain/enums/message/Message";
import { IResponseModel } from "../interfaces/IResponseModel";

export class ResponseModel implements IResponseModel {
  async manageResponse(
    promise: Promise<any>,
    res: Response,
    statusCode: HttpStatusCode,
    message: Message
  ): Promise<void> {
    await promise;
    res.status(statusCode).json(message);
  }
}
