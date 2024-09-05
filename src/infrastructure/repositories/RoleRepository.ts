import { DataSource, Repository } from "typeorm";
import { IRoleRepository } from "../../domain/repositories/IRoleRepository";
import { appDataSource } from "../database/orm/config/typeorm";
import { Role } from "../database/entities/Role";
import { IRole } from "../../domain/entities/IRole";

export class RoleRepository implements IRoleRepository {
  private dataSource: DataSource = appDataSource;
  private roleRepository: Repository<Role>;

  constructor() {
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
