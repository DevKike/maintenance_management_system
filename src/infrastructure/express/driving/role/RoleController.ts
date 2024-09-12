import { Request, Response, NextFunction } from "express";
import { HttpResponseModel } from "../../http/HttpResponseModel";
import { IRoleController } from "../../interfaces/driving/role/IRoleController";
import { HttpStatusCode } from "../../http/HttpStatusCode";
import { IGetAllRolesUseCase } from "../../../../domain/interfaces/role/usecases/IGetAllRolesUseCase";

export class RoleController implements IRoleController {
  private httpResponseModel: HttpResponseModel;

  constructor(private readonly getAllRolesUseCase: IGetAllRolesUseCase) {
    this.httpResponseModel = new HttpResponseModel();
  }

  async getRoles(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const roles = await this.getAllRolesUseCase.execute();
      await this.httpResponseModel.manageResponse(Promise.resolve(roles), res, HttpStatusCode.OK, roles);
    } catch (error) {
      next(error);
    }
  }
}
