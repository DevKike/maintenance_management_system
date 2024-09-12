import { DataSource, Repository } from "typeorm";
import { IRoleRepository } from "../../domain/interfaces/role/IRoleRepository";
import { Role } from "../database/entities/Role";
import { IRole } from "../../domain/interfaces/role/IRole";

export class RoleRepository implements IRoleRepository {
  private readonly roleRepository: Repository<Role>;

  constructor(private readonly dataSource: DataSource) {
    this.roleRepository = this.dataSource.getRepository(Role);
  }

  async getAll(): Promise<IRole[]> {
    try {
      return await this.roleRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
