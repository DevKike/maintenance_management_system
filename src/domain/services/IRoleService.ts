import { IRole } from "../entities/IRole";

export interface IRoleService {
  getRoles(): Promise<IRole[]>;
}
