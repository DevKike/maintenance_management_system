import { IMaintenanceType } from "../../../domain/entities/maintenanceType/IMaintenanceType";
import { IMaintenanceTypeRepository } from "../../../domain/entities/maintenanceType/IMaintenanceTypeRepository";
import { IMaintenanceTypeService } from "../../../domain/entities/maintenanceType/IMaintenanceTypeService";


export class MaintenanceTypeService implements IMaintenanceTypeService {
  constructor(private readonly maintenanceTypeRepository: IMaintenanceTypeRepository) {}

  async createMaintenanceType(maintenanceType: IMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeRepository.save(maintenanceType);
    } catch (error) {
      throw error;
    }
  }
}
