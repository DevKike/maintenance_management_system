import { IMaintenanceType } from "../../../domain/entities/maintenanceType/IMaintenanceType";
import { IMaintenanceTypeService } from "../../../domain/entities/maintenanceType/IMaintenanceTypeService";
import { IMaintenanceTypeUseCase } from "../../../domain/entities/maintenanceType/IMaintenanceTypeUseCase";

export class MaintenanceTypeUseCase implements IMaintenanceTypeUseCase {
  constructor(private readonly maintenanceTypeService: IMaintenanceTypeService) {}

  async createMaintenanceType(maintenanceType: IMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeService.createMaintenanceType(maintenanceType);
    } catch (error) {
      throw error;
    }
  }
}
