import { Response } from "express";
import { IRole } from "../../domain/entities/IRole";

export interface IRoleController {
  getRoles(res: Response): Promise<IRole[]>;
}
