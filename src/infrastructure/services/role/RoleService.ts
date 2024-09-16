import { IRole } from "../../../domain/entities/role/IRole";
import { IRoleRepository } from "../../../domain/entities/role/IRoleRepository";
import { IRoleService } from "../../../domain/entities/role/IRoleService";


export class RoleService implements IRoleService {
  constructor(private readonly roleRepository: IRoleRepository) {}

  async getRoles(): Promise<IRole[]> {
    return await this.roleRepository.getAll();
  }
}
