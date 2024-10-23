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

export interface ICreateMaintenance extends Omit<IMaintenance, "id" | "createdAt" | "updatedAt"> {}

export interface IUpdateMaintenance extends Partial<Omit<IMaintenance, "id" | "createdAt" | "updatedAt">> {}