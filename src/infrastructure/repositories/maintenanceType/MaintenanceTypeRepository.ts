import { DataSource, Repository } from "typeorm";
import { IMaintenanceTypeRepository } from "../../../domain/entities/maintenanceType/IMaintenanceTypeRepository";
import { MaintenanceType } from "../../database/entities/MaintenanceType";
import { IMaintenanceType } from "../../../domain/entities/maintenanceType/IMaintenanceType";

export class MaintenanceTypeRepository implements IMaintenanceTypeRepository {
  private readonly maintenanceTypeRepository: Repository<MaintenanceType>;

  constructor(private readonly dataSource: DataSource) {
    this.maintenanceTypeRepository = this.dataSource.getRepository(MaintenanceType);
  }

  async save(maintenanceType: IMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeRepository.save(maintenanceType);
    } catch (error) {
        console.error(error)
      throw error;
    }
  }
}
