import { ICreateDepartmentMaintenanceTypeAssignment } from "./IDepartmentMaintenanceTypeAssignment";

export interface IDepartmentMaintenanceTypeAssignmentRepository {
  save(departmentMaintenanceTypeAssignment: ICreateDepartmentMaintenanceTypeAssignment): Promise<void>;
}
