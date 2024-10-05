import { IDepartment } from "./IDepartment";

export interface IDepartmentRepository {
  create(department: IDepartment): Promise<void>;
  get(): Promise<IDepartment[]>;
  update(id: number, department: IDepartment): Promise<void>;
  delete(id: number): Promise<void>;
}
