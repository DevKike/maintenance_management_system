import { MaintenanceStatus } from "../../enums/maintenance/MaintenanceStatus";
import { IDepartment } from "../department/IDepartment";
import { IProcess } from "../process/IProcess";

export interface IMaintenance {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  status?: MaintenanceStatus;
  maintenance_type: IMaintenanceType;
  process: IProcess;
  department: IDepartment;
}

export interface IMaintenanceType {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}
