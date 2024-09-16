import { IRole } from "./IRole";

export interface IRoleRepository {
  getAll(): Promise<IRole[]>;
}
