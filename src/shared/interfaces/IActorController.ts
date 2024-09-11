import { Request, Response, NextFunction } from "express";

export interface IActorController {
  createActor(req: Request, res: Response, next: NextFunction): Promise<void>;
}
