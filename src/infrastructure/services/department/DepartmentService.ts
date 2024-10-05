import { IDepartment } from "../../../domain/entities/department/IDepartment";
import { IDepartmentRepository } from "../../../domain/entities/department/IDepartmentRepository";
import { IDepartmentService } from "../../../domain/entities/department/IDepartmentService";

export class DepartmentService implements IDepartmentService {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async createDepartment(department: IDepartment): Promise<void> {
    try {
      if (!department.status) {
        delete department.status;
      }
      await this.departmentRepository.create(department);
    } catch (error) {
      throw error;
    }
  }

  async getDepartments(): Promise<IDepartment[]> {
    try {
      return await this.departmentRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async updateDepartment(id: number, department: IDepartment): Promise<void> {
    try {
      await this.departmentRepository.update(id, department);
    } catch (error) {
      throw error;
    }
  }

  async deleteDepartment(id: number): Promise<void> {
    try {
      await this.departmentRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
