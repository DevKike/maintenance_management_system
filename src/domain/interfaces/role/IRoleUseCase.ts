import { IRole } from "./IRole";

export interface IRoleUseCase {
  getRoles(): Promise<IRole[]>;
}
