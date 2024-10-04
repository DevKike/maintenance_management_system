import { IDepartment } from "../../../domain/entities/department/IDepartment";
import { IDepartmentService } from "../../../domain/entities/department/IDepartmentService";
import { DepartmentRepository } from "../../repositories/department/DepartmentRepository";

export class DepartmentService implements IDepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  async createDepartment(department: IDepartment): Promise<IDepartment> {
    return await this.departmentRepository.create(department);
  }
}
