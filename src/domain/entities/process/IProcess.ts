import { IDepartment } from "../department/IDepartment";
import { IMaintenanceType } from "../maintenance/IMaintenance";

export interface IProcess {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  maintenance_type: IMaintenanceType;
}
