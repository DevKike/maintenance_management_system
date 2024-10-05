import { DataSource, Repository } from "typeorm";
import { IDepartment } from "../../../domain/entities/department/IDepartment";
import { IDepartmentRepository } from "../../../domain/entities/department/IDepartmentRepository";
import { Department } from "../../database/entities/Department";

export class DepartmentRepository implements IDepartmentRepository {
  private readonly departmentRepository: Repository<Department>;

  constructor(private readonly dataSource: DataSource) {
    this.departmentRepository = this.dataSource.getRepository(Department);
  }

  async create(department: IDepartment): Promise<void> {
    try {
      await this.departmentRepository.save(department);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IDepartment[]> {
    try {
      return await this.departmentRepository.find({
        relations: ["coordinator"],
      });
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, department: IDepartment): Promise<void> {
    try {
      await this.departmentRepository.update(id, department);
    } catch (error) {
      throw error;
    }
  }
}
