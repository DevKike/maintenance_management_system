import { DepartmentStatus } from "../../enums/department/DepartmentStatus";
import { IActor } from "../actor/IActor";
import { IMaintenanceType } from "../maintenance/IMaintenance";

export interface IDepartment {
  id: number;
  name: string;
  description: string;
  phone_number: string;
  created_at: Date;
  updated_at: Date;
  status?: DepartmentStatus;
  coordinator: IActor;
  maintenance_types: IMaintenanceType[];
}