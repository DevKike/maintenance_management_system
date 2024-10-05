import { Repository } from "typeorm";
import { IMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceRepository } from "../../../domain/entities/maintenance/IMaintenanceRepository";
import { Maintenance } from "../../database/entities/Maintenance";

export class MaintenanceRepository implements IMaintenanceRepository {
  private readonly maintenanceRepository: Repository<Maintenance>;

  async create(maintenance: IMaintenance): Promise<void> {
    await this.maintenanceRepository.save(maintenance);
  }
}
