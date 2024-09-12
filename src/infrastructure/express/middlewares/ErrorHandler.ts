import { Request, Response, NextFunction } from "express";
import { ICustomError } from "../interfaces/ICustomError";
import { MessageConstants } from "../messages/MessageConstants";
import { HttpStatusCode } from "../http/HttpStatusCode";

export class ErrorHandler {
  static handle(
    err: ICustomError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    const statusCode = err.statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR;
    const message = err.message || MessageConstants.INTERNAL_SERVER_ERROR;

    res.status(statusCode).json({
      error: message,
    });
  }
}
