import { IRole } from "../../domain/entities/IRole";
import { IRoleUseCase } from "../../domain/usecases/IRoleUseCase";
import { RoleService } from "../../infrastructure/services/RoleService";
import { NotFoundException } from "../../shared/exceptions/NotFoundException";
import { Message } from "../../shared/messages/Message";

export class RoleUseCase implements IRoleUseCase {
  private roleService: RoleService;

  constructor(roleService: RoleService) {
    this.roleService = roleService;
  }

  async getRoles(): Promise<IRole[]> {
    try {
      const roles = await this.roleService.getRoles();

      if (!roles || roles.length === 0) {
        throw new NotFoundException(Message.ROLE_NOT_FOUND);
      }

      return roles;
    } catch (error) {
      throw error;
    }
  }
}
