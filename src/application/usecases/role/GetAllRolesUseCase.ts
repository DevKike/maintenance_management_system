import { IRole } from "../../../domain/interfaces/role/IRole";
import { IGetAllRolesUseCase } from "../../../domain/interfaces/role/usecases/IGetAllRolesUseCase";
import { IRoleService } from "../../../domain/interfaces/role/IRoleService";
//import { NotFoundException } from "../../../shared/exceptions/NotFoundException";

export class GetAllRolesUseCase implements IGetAllRolesUseCase {

  constructor(private readonly roleService: IRoleService) {}

  async execute(): Promise<IRole[]> {
    try {
      const roles = await this.roleService.getRoles();

/*       if (!roles || roles.length === 0) {
        throw new NotFoundException(Message.ROLE_NOT_FOUND);
      } */

      return roles;
    } catch (error) {
      throw error;
    }
  }
}
