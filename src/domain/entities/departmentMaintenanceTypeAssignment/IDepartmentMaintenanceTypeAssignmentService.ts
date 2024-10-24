import { ICreateDepartmentMaintenanceTypeAssignment } from "./IDepartmentMaintenanceTypeAssignment";

export interface IDepartmentMaintenanceTypeAssignmentService {
  createDepartmentMaintenanceTypeAssignment(departmentMaintenanceTypeAssignment: ICreateDepartmentMaintenanceTypeAssignment): Promise<void>;
}