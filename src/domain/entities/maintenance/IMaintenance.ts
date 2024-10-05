import { Status } from "../../enums/maintenance/Status";
import { Type } from "../../enums/maintenance/Type";
import { IDepartment } from "../department/IDepartment";

export interface IMaintenance {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  status: Status;
  type: Type;
  department: IDepartment;
}
