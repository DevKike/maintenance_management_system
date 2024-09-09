import { Response } from "express";

export interface IResponse {
  manageResponse(promise: Promise<any>, res: Response): Promise<void>;
}
