import { IDepartment } from "./IDepartment";

export interface IDepartmentService {
  createDepartment(department: IDepartment): Promise<void>;
  getDepartments(): Promise<IDepartment[]>;
}
