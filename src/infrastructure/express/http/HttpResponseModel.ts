import { Response } from "express";
import { IHttpResponseModel } from "../interfaces/IHttpResponseModel";
import { HttpStatusCode } from "./HttpStatusCode";
import { MessageConstants } from "../messages/MessageConstants";

export class HttpResponseModel implements IHttpResponseModel {
  async manageResponse(
    promise: Promise<any>,
    res: Response,
    statusCode: HttpStatusCode,
    message?: MessageConstants
  ): Promise<void> {
    try {
      const result = await promise;
      res.status(statusCode).json(message || result);
    } catch(error) { 
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR) .json({
        error: MessageConstants.UNEXPECTED_ERROR_OCURRED
      })
      
    }
  }
}
