import { IRole } from "../../../domain/entities/role/IRole";
import { IRoleService } from "../../../domain/entities/role/IRoleService";
import { IRoleUseCase } from "../../../domain/entities/role/IRoleUseCase";


export class RoleUseCase implements IRoleUseCase {
  constructor(private readonly roleService: IRoleService) {}

  async getRoles(): Promise<IRole[]> {
    return await this.roleService.getRoles();
  }
}
