import { Request, Response, NextFunction } from "express";
import { HttpResponseModel } from "../../http/HttpResponseModel";
import { IRoleController } from "../../interfaces/driving/role/IRoleController";
import { IRoleUseCase } from "../../../../domain/interfaces/role/IRoleUseCase";
import { HttpStatusCode } from "../../http/HttpStatusCode";

export class RoleController implements IRoleController {
  private httpResponseModel: HttpResponseModel;

  constructor(private readonly roleUseCase: IRoleUseCase) {
    this.httpResponseModel = new HttpResponseModel();
  }

  async getRoles(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const roles = await this.roleUseCase.getAll();
      await this.httpResponseModel.manageResponse(Promise.resolve(roles), res, HttpStatusCode.OK, roles);
    } catch (error) {
      next(error);
    }
  }
}
