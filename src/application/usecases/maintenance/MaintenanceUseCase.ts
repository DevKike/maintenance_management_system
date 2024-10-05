import { IMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceUseCase } from "../../../domain/entities/maintenance/IMaintenanceUseCase";
import { MaintenanceService } from "../../../infrastructure/services/maintenance/MaintenanceService";

export class MaintenanceUseCase implements IMaintenanceUseCase {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  async createMaintenance(maintenance: IMaintenance): Promise<void> {
    try {
      await this.maintenanceService.createMaintenance(maintenance);
    } catch (error) {
      throw error;
    }
  }

  async getAllMaintenances(): Promise<IMaintenance[]> {
    try {
      return await this.maintenanceService.getAllMaintenances();
    } catch (error) {
      throw error;
    }
  }
}
