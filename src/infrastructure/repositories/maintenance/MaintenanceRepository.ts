import { DataSource, Repository } from "typeorm";
import { IMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceRepository } from "../../../domain/entities/maintenance/IMaintenanceRepository";
import { Maintenance } from "../../database/entities/Maintenance";

export class MaintenanceRepository implements IMaintenanceRepository {
  private readonly maintenanceRepository: Repository<Maintenance>;

  constructor(private readonly dataSource: DataSource) {
    this.maintenanceRepository = this.dataSource.getRepository(Maintenance);
  }

  async create(maintenance: IMaintenance): Promise<void> {
    try {
      await this.maintenanceRepository.save(maintenance);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IMaintenance[]> {
    try {
      return await this.maintenanceRepository.find({
        relations: ["department"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id: number): Promise<IMaintenance | null> {
    try {
      return await this.maintenanceRepository.findOne({
        where: { id: id },
        relations: ["department"]
      });
    } catch (error) {
      throw error;
    }
  }
}
