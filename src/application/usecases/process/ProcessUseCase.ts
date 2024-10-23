import { IProcess } from "../../../domain/entities/assignmentDepartmentTypeMaintenance/IAssignmentDepartmentTypeMaintenance";
import { IProcessService } from "../../../domain/entities/assignmentDepartmentTypeMaintenance/IProcessService";
import { IProcessUseCase } from "../../../domain/entities/assignmentDepartmentTypeMaintenance/IProcessUseCase";

export class ProcessUseCase implements IProcessUseCase {
  constructor(private readonly processService: IProcessService) {}

  async createProcess(process: IProcess): Promise<void> {
    try {
      await this.processService.createProcess(process);
    } catch (error) {
      throw error;
    }
  }

  async getAllProcesses(): Promise<IProcess[]> {
    try {
      return await this.processService.getAllProcesses();
    } catch (error) {
      throw error;
    }
  }
}
