import { IRole } from "../../../domain/interfaces/role/IRole";
import { IRoleService } from "../../../domain/interfaces/role/IRoleService";
import { IRoleUseCase } from "../../../domain/interfaces/role/IRoleUseCase";

export class RoleUseCase implements IRoleUseCase {
  constructor(private readonly roleService: IRoleService) {}

  async getAll(): Promise<IRole[]> {
    return await this.roleService.getRoles();
  }
}
