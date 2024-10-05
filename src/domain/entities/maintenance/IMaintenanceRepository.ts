import { IMaintenance } from "./IMaintenance";

export interface IMaintenanceRepository {
  create(maintenance: IMaintenance): Promise<void>;
  getAll(): Promise<IMaintenance[]>;
}
