import { DepartmentStatus } from "../../enums/department/DepartmentStatus";
import { IActor } from "../actor/IActor";
import { IAssignmentDepartmentTypeMaintenance } from "../assignmentDepartmentTypeMaintenance/IAssignmentDepartmentTypeMaintenance";

export interface IDepartment {
  id: number;
  name: string;
  description: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  status: DepartmentStatus;
  coordinator: IActor;
  actors: IActor[];
  assignmentDepartmentTypeMaintenances: IAssignmentDepartmentTypeMaintenance[];
}

export interface ICreateDepartment extends Omit<IDepartment, "id" | "createdAt" | "updatedAt">{}

export interface IUpdateDepartment extends Partial<Omit<IDepartment, "id" | "createdAt" | "updatedAt">>{}