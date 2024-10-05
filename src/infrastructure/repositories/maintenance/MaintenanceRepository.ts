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
}
