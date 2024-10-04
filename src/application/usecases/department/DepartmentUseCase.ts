import { IDepartment } from "../../../domain/entities/department/IDepartment";
import { IDepartmentService } from "../../../domain/entities/department/IDepartmentService";
import { IDepartmentUseCase } from "../../../domain/entities/department/IDepartmentUseCase";

export class DepartmentUseCase implements IDepartmentUseCase {
  constructor(private readonly departmentService: IDepartmentService) {}

  async createDepartment(department: IDepartment): Promise<IDepartment> {
    try {
      return await this.departmentService.createDepartment(department);
    } catch (error) {
      throw error;
    }
  }
}
