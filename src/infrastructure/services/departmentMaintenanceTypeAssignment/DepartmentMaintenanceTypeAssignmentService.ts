import { ICreateDepartmentMaintenanceTypeAssignment } from "../../../domain/entities/departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignment";
import { IDepartmentMaintenanceTypeAssignmentRepository } from "../../../domain/entities/departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignmentRepository";
import { IDepartmentMaintenanceTypeAssignmentService } from "../../../domain/entities/departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignmentService";

export class DepartmentMaintenanceTypeAssignmentService implements IDepartmentMaintenanceTypeAssignmentService {
  constructor(private readonly departmentMaintenanceTypeAssignmentRepository: IDepartmentMaintenanceTypeAssignmentRepository) {}

  async createDepartmentMaintenanceTypeAssignment(departmentMaintenanceTypeAssignment: ICreateDepartmentMaintenanceTypeAssignment): Promise<void> {
    try {
      await this.departmentMaintenanceTypeAssignmentRepository.save(departmentMaintenanceTypeAssignment);
    } catch (error) {
      throw error;
    }
  }
}
