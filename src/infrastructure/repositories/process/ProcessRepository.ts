import { DataSource, Repository } from "typeorm";
import { IProcessRepository } from "../../../domain/entities/assignmentDepartmentTypeMaintenance/IProcessRepository";
import { Process } from "../../database/entities/Process";
import { IProcess } from "../../../domain/entities/assignmentDepartmentTypeMaintenance/IAssignmentDepartmentTypeMaintenance";

export class ProcessRepository implements IProcessRepository {
  private readonly processRepository: Repository<Process>;

  constructor(private readonly dataSource: DataSource) {
    this.processRepository = this.dataSource.getRepository(Process);
  }

  async create(process: IProcess): Promise<void> {
    try {
      await this.processRepository.save(process);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IProcess[]> {
    try {
      return await this.processRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
