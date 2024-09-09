import { Request, Response, NextFunction } from "express";
import { ResponseModel } from "../../../shared/response/ResponseModel";
import { IRoleController } from "../../../shared/interfaces/IRoleController";
import { RoleUseCase } from "../../../application/usecases/RoleUseCase";
import { HttpStatusCode } from "../../../shared/httpStatus/HttpStatusCode";

export class RoleController implements IRoleController {
  private roleUseCase: RoleUseCase;
  private responseModel: ResponseModel;

  constructor(roleUseCase: RoleUseCase) {
    this.roleUseCase = roleUseCase;
    this.responseModel = new ResponseModel();
  }

  async getRoles(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const roles = await this.roleUseCase.getRoles();
      await this.responseModel.manageResponse(Promise.resolve(roles), res);
      res.status(HttpStatusCode.SUCCESS).json(roles);
    } catch (error) {
      next(error);
    }
  }
}
