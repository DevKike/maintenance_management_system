import { IRole } from "./IRole";

export interface IRoleService {
  getRoles(): Promise<IRole[]>;
  getRoleById(id: number): Promise<IRole | null>;
}
