import { IProcess } from "./IProcess";

export interface IProcessRepository {
  create(process: IProcess): Promise<void>;
}
