import { IMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceService } from "../../../domain/entities/maintenance/IMaintenanceService";
import { MaintenanceRepository } from "../../repositories/maintenance/MaintenanceRepository";

export class MaintenanceService implements IMaintenanceService {
  constructor(private readonly maintenanceRepository: MaintenanceRepository) {}

  async createMaintenance(maintenance: IMaintenance): Promise<void> {
    try {
      if (!maintenance.status) {
        delete maintenance.status;
      }
      await this.maintenanceRepository.create(maintenance);
    } catch (error) {
      throw error;
    }
  }

  async getAllMaintenances(): Promise<IMaintenance[]> {
    try {
      return await this.maintenanceRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
