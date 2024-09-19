import { IRole } from "../../../domain/entities/role/IRole";
import { IRoleService } from "../../../domain/entities/role/IRoleService";
import { IRoleUseCase } from "../../../domain/entities/role/IRoleUseCase";
import { Message } from "../../../domain/enums/message/Message";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";

export class RoleUseCase implements IRoleUseCase {
  constructor(private readonly roleService: IRoleService) {}

  async getRoles(): Promise<IRole[]> {
    const roles = await this.roleService.getRoles();

    /* if (!roles || roles.length === 0) {
      throw new NotFoundException(Message.NOT_ROLES_FOUND);
    } */

    return roles;
  }
}
