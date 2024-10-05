import { IMaintenance } from "./IMaintenance";

export interface IMaintenanceService {
  createMaintenance(maintenance: IMaintenance): Promise<void>;
  getAllMaintenances(): Promise<IMaintenance[]>;
  getMaintenanceById(id: number): Promise<IMaintenance | null>;
  updateMaintenanceById(id: number, maintenance: IMaintenance): Promise<void>;
}
