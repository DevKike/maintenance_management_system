import { IRole } from "../entities/IRole";

export interface IRoleRepository {
  getAll(): Promise<IRole[]>;
  getOneById(id: number): Promise<IRole | null>;
}
