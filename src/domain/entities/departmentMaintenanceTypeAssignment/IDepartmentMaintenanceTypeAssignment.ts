
import { DepartmentMaintenanceTypeAssignmentStatus } from "../../enums/DepartmentMaintenanceTypeAssignmentStatus/DepartmentMaintenanceTypeAssignmentStatus";
import { IDepartment } from "../department/IDepartment";
import { IMaintenance } from "../maintenance/IMaintenance";
import { IMaintenanceType } from "../maintenanceType/IMaintenanceType";

export interface IDepartmentMaintenanceTypeAssignment {
  id: number;
  assignmentDate: Date;
  status: DepartmentMaintenanceTypeAssignmentStatus;
  priority: number;
  comments: string;
  department: IDepartment;
  maintenanceType: IMaintenanceType;
  maintenances: IMaintenance[];
}
