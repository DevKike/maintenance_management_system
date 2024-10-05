import { IDepartment } from "../../../domain/entities/department/IDepartment";
import { IDepartmentService } from "../../../domain/entities/department/IDepartmentService";
import { DepartmentRepository } from "../../repositories/department/DepartmentRepository";

export class DepartmentService implements IDepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  async createDepartment(department: IDepartment): Promise<void> {
    try {
      await this.departmentRepository.create(department);
    } catch (error) {
      throw error;
    }
  }

  async getDepartments(): Promise<IDepartment[]> {
    try {
      return await this.departmentRepository.get();
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
