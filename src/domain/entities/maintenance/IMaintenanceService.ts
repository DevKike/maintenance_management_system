import { IMaintenance } from "./IMaintenance";

export interface IMaintenanceService {
  createMaintenance(maintenance: IMaintenance): Promise<void>;
}
