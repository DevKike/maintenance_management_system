import { IMaintenance } from "./IMaintenance";

export interface IMaintenanceUseCase {
  createMaintenance(maintenance: IMaintenance): Promise<void>;
  getAllMaintenances(): Promise<IMaintenance[]>;
}
