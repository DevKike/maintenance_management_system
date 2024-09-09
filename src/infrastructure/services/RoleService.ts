import { IRole } from "../../domain/entities/IRole";
import { IRoleService } from "../../domain/services/IRoleService";
import { RoleRepository } from "../repositories/RoleRepository";

export class RoleService implements IRoleService {
  private roleRepository: RoleRepository;

  constructor(roleRepository: RoleRepository) {
    this.roleRepository = roleRepository;
  }

  async getRoles(): Promise<IRole[]> {
    return await this.roleRepository.getAll();
  }
}
