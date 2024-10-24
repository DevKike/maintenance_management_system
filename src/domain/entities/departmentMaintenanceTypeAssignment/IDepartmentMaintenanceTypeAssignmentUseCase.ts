import { ICreateDepartmentMaintenanceTypeAssignment } from "./IDepartmentMaintenanceTypeAssignment";

export interface IDepartmentMaintenanceTypeAssignmentUseCase {
  createDepartmentMaintenanceTypeAssignment(departmentMaintenanceTypeAssignment: ICreateDepartmentMaintenanceTypeAssignment): Promise<void>;
}