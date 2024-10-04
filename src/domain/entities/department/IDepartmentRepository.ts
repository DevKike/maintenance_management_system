import { IDepartment } from "./IDepartment";

export interface IDepartmentRepository {
  create(department: IDepartment): Promise<IDepartment>;
}
