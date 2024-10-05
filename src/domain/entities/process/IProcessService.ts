import { IProcess } from "./IProcess";

export interface IProcessService {
  createProcess(process: IProcess): Promise<void>;
}
