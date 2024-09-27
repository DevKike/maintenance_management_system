import { IRole } from "./IRole";

export interface IRoleRepository {
  getAll(): Promise<IRole[]>;
  getOneById(id: number): Promise<IRole | null>;
}
