import { Response } from "express";
import { HttpStatusCode } from "../../../domain/enums/httpStatusCode/HttpStatusCode";
import { Message } from "../../../domain/enums/message/Message";

export class ResponseModel {
  static async manageResponse(
    promise: Promise<any>,
    res: Response,
    statusCode: HttpStatusCode,
    message: Message
  ): Promise<void> {
    try {
      const result = await promise;
      res.status(statusCode).json({ message, data: result });
    } catch (error) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: Message.INTERNAL_SERVER_ERROR });
    }
  }
}
