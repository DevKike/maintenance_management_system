import { IAssignmentDepartmentTypeMaintenance } from "../assignmentDepartmentTypeMaintenance/IAssignmentDepartmentTypeMaintenance";


export interface IMaintenanceType {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  assignmentDepartmentTypeMaintenances: IAssignmentDepartmentTypeMaintenance[];
}
