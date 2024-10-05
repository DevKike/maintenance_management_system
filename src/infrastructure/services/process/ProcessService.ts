import { IProcess } from "../../../domain/entities/process/IProcess";
import { IProcessRepository } from "../../../domain/entities/process/IProcessRepository";
import { IProcessService } from "../../../domain/entities/process/IProcessService";

export class ProcessService implements IProcessService {
  constructor(private readonly processRepository: IProcessRepository) {}

  async createProcess(process: IProcess): Promise<void> {
    try {
      await this.processRepository.create(process);
    } catch (error) {
      throw error;
    }
  }

  async getAllProcesses(): Promise<IProcess[]> {
    try {
      return await this.processRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
