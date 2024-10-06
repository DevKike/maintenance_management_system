import { IMaintenanceType } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceTypeRepository } from "../../../domain/entities/maintenance/IMaintenanceRepository";
import { IMaintenanceTypeService } from "../../../domain/entities/maintenance/IMaintenanceService";

export class MaintenanceTypeService implements IMaintenanceTypeService {
  constructor(private readonly maintenanceTypeRepository: IMaintenanceTypeRepository) {}

  async createMaintenanceType(maintenanceType: IMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeRepository.create(maintenanceType);
    } catch (error) {
      throw error;
    }
  }
}
