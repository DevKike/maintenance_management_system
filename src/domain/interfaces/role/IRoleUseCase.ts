import { IRole } from "./IRole";

export interface IRoleUseCase {
  getAll(): Promise<IRole[]>;
}
