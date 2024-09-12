import { IRole } from "./IRole";

export interface IRoleService {
  getRoles(): Promise<IRole[]>;
}
