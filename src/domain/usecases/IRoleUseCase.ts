import { IRole } from "../entities/IRole";

export interface IRoleUseCase {
  getRoles(): Promise<IRole[]>;
}
