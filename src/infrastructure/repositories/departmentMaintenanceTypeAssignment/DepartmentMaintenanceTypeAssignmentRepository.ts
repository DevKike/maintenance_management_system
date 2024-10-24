import { DataSource, Repository } from "typeorm";
import { IDepartmentMaintenanceTypeAssignmentRepository } from "../../../domain/entities/departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignmentRepository";
import { DepartmentMaintenanceTypeAssignment } from "../../database/entities/DepartmentMaintenanceTypeAssignment";
import { ICreateDepartmentMaintenanceTypeAssignment } from "../../../domain/entities/departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignment";

export class DepartmentMaintenanceTypeAssignmentRepository implements IDepartmentMaintenanceTypeAssignmentRepository {
  private readonly departmentRepository: Repository<DepartmentMaintenanceTypeAssignment>;

  constructor(private readonly dataSource: DataSource) {
    this.departmentRepository = this.dataSource.getRepository(DepartmentMaintenanceTypeAssignment);
  }

  async save(departmentMaintenanceTypeAssignment: ICreateDepartmentMaintenanceTypeAssignment): Promise<void> {
    try {
      await this.departmentRepository.save(departmentMaintenanceTypeAssignment);
    } catch (error) {
      throw error;
    }
  }
}
