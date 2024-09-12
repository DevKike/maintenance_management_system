import { IRole } from "../IRole";

export interface IGetAllRolesUseCase {
  execute(): Promise<IRole[]>;
}
