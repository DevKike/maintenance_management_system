import { Response } from "express";
import { IResponse } from "../interfaces/IResponse";
import { HttpStatusCode } from "../httpStatus/HttpStatusCode";
import { Message } from "../messages/Message";

export class ResponseModel implements IResponse {
  async manageResponse(
    promise: Promise<any>,
    res: Response,
    statusCode: HttpStatusCode,
    message?: Message
  ): Promise<void> {
    await promise;
    res.status(statusCode).json(message);
  }
}
