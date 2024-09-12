import { Request, Response, NextFunction } from "express";

export interface IRoleController {
  getRoles(req: Request, res: Response, next: NextFunction): Promise<void>;
}
