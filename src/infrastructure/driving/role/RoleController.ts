import { ResponseModel } from "../../../shared/response/ResponseModel";
import { RoleService } from "../../services/RoleService";
import { IRoleController } from "../../../shared/interfaces/IRoleController";
import { Response } from "express";
import { IRole } from "../../../domain/entities/IRole";

export class RoleController implements IRoleController {
  private readonly roleService: RoleService;
  private readonly responseModel: ResponseModel;

  constructor() {
    this.roleService = new RoleService();
    this.responseModel = new ResponseModel();
  }

  async getRoles(response: Response): Promise<IRole[]> {
    const roles = this.roleService.getRoles();
    this.responseModel.manageResponse(roles, response);
    return roles;
  }
}
