import { Response } from "express";
import { IResponse } from "../interfaces/IResponse";

export class ResponseModel implements IResponse {
  async manageResponse(promise: Promise<any>, res: Response): Promise<void> {
    try {
      const result = await promise;
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
