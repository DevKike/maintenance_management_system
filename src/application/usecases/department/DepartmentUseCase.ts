import { IDepartment } from "../../../domain/entities/department/IDepartment";
import { IDepartmentService } from "../../../domain/entities/department/IDepartmentService";
import { IDepartmentUseCase } from "../../../domain/entities/department/IDepartmentUseCase";

export class DepartmentUseCase implements IDepartmentUseCase {
  constructor(private readonly departmentService: IDepartmentService) {}

  async createDepartment(department: IDepartment): Promise<void> {
    try {
      await this.departmentService.createDepartment(department);
    } catch (error) {
      throw error;
    }
  }
  
  async getDepartments(): Promise<IDepartment[]> {
    try {
      return await this.departmentService.getDepartments();
    } catch (error) {
      throw error;
    }
  }

  async updateDepartment(id: number, department: IDepartment): Promise<void> {
    try {
      await this.departmentService.updateDepartment(id, department);
    } catch (error) {
      throw error;
    }
  }

  async deleteDepartment(id: number): Promise<void> {
    try {
      await this.departmentService.deleteDepartment(id);
    } catch (error) {
      throw error;
    }
  }
}
