import { MaintenanceStatus } from "../../enums/maintenance/MaintenanceStatus";
import { MaintenanceType } from "../../enums/maintenance/MaintenanceType";
import { IDepartment } from "../department/IDepartment";

export interface IMaintenance {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  status?: MaintenanceStatus;
  type: MaintenanceType;
  department: IDepartment;
}
