import { AssignmentDepartmentTypeMaintenanceStatus } from "../../enums/assignmentDepartmentTypeMaintenanceStatus/AssignmentDepartmentTypeMaintenanceStatus";
import { IDepartment } from "../department/IDepartment";
import { IMaintenance } from "../maintenance/IMaintenance";
import { IMaintenanceType } from "../maintenanceType/IMaintenanceType";

export interface IAssignmentDepartmentTypeMaintenance {
  id: number;
  assignmentDate: Date;
  status: AssignmentDepartmentTypeMaintenanceStatus;
  priority: number;
  comments: string;
  department: IDepartment;
  maintenanceType: IMaintenanceType;
  maintenances: IMaintenance[];
}
