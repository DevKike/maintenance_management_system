import { IAssignmentDepartmentTypeMaintenance } from "../assignmentDepartmentTypeMaintenance/IAssignmentDepartmentTypeMaintenance";

export interface IMaintenanceType {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  assignmentDepartmentTypeMaintenances: IAssignmentDepartmentTypeMaintenance[];
}

export interface ICreateMaintenanceType extends Omit<IMaintenanceType, "id" | "createdAt" | "updatedAt"> {}

export interface IUpdateMaintenanceType extends Partial<Omit<IMaintenanceType, "id" | "createdAt" | "updatedAt">> {}
