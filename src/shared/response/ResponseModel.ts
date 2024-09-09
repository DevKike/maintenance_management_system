import { Response } from "express";
import { IResponse } from "../interfaces/IResponse";
import { HttpStatusCode } from "../httpStatus/HttpStatusCode";

export class ResponseModel implements IResponse {
  async manageResponse(promise: Promise<any>, res: Response): Promise<void> {
    try {
      const result = await promise;
      res.status(HttpStatusCode.SUCCESS).json(result);
    } catch (error) {
      throw error;
    }
  }
}
