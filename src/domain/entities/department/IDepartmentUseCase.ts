import { IDepartment } from "./IDepartment";

export interface IDepartmentUseCase {
  createDepartment(department: IDepartment): Promise<void>;
}
