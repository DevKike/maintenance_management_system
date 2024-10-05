import { IProcess } from "./IProcess";

export interface IProcessUseCase {
  createProcess(process: IProcess): Promise<void>;
  getAllProcesses(): Promise<IProcess[]>;
}
