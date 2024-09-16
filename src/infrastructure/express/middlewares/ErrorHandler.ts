import { Request, Response, NextFunction } from "express";
import { ICustomError } from "../interfaces/ICustomError";
import { Message } from "../../../domain/enums/message/Message";
import { HttpStatusCode } from "../../../domain/enums/httpStatusCode/HttpStatusCode";

export class ErrorHandler {
  static handle(
    err: ICustomError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    const statusCode = err.statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR;
    const message = err.message || Message.INTERNAL_SERVER_ERROR;

    res.status(statusCode).json({
      error: message,
    });
  }
}
