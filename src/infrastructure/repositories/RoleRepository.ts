import { DataSource, Repository } from "typeorm";
import { IRoleRepository } from "../../domain/repositories/IRoleRepository";
import { Role } from "../database/entities/Role";
import { IRole } from "../../domain/entities/IRole";

export class RoleRepository implements IRoleRepository {
  private roleRepository: Repository<Role>;

  constructor(dataSource: DataSource) {
    this.roleRepository = dataSource.getRepository(Role);
  }

  async getAll(): Promise<IRole[]> {
    return await this.roleRepository.find();
  }
}
