import { IRole } from "../../domain/entities/IRole";
import { IRoleService } from "../../domain/services/IRoleService";
import { IRoleUseCase } from "../../domain/usecases/IRoleUseCase";
import { RoleService } from "../../infrastructure/services/RoleService";

export class RoleUseCase implements IRoleUseCase {
  private roleService: IRoleService;

  constructor({ roleService }: { roleService: IRoleService }) {
    this.roleService = roleService;
  }

  async getRoles(): Promise<IRole[]> {
    try {
      return await this.roleService.getRoles();
    } catch (error) {
      throw error;
    }
  }
}
