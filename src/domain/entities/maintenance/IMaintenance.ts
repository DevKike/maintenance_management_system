import { MaintenanceStatus } from "../../enums/maintenance/MaintenanceStatus";
import { IAssignmentDepartmentTypeMaintenance } from "../assignmentDepartmentTypeMaintenance/IAssignmentDepartmentTypeMaintenance";

export interface IMaintenance {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: MaintenanceStatus;
  assignmentDepartmentTypeMaintenance: IAssignmentDepartmentTypeMaintenance;
}
