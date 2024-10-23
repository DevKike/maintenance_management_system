import { ICreateDepartment, IDepartment, IUpdateDepartment } from "./IDepartment";

export interface IDepartmentRepository {
  create(department: ICreateDepartment): Promise<void>;
  getAll(): Promise<IDepartment[]>;
  update(id: number, department: IUpdateDepartment): Promise<void>;
}
