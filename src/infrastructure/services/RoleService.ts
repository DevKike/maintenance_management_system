import { IRole } from "../../domain/interfaces/role/IRole";
import { IRoleRepository } from "../../domain/interfaces/role/IRoleRepository";
import { IRoleService } from "../../domain/interfaces/role/IRoleService";

export class RoleService implements IRoleService {
  constructor(private readonly roleRepository: IRoleRepository) {}

  async getRoles(): Promise<IRole[]> {
    return await this.roleRepository.getAll();
  }
}
