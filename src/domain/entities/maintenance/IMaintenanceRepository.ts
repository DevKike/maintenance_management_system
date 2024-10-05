import { IMaintenance } from "./IMaintenance";

export interface IMaintenanceRepository {
  create(maintenance: IMaintenance): Promise<void>;
  getAll(): Promise<IMaintenance[]>;
  getOneById(id: number): Promise<IMaintenance | null>;
  updateById(id: number, maintenance: IMaintenance): Promise<void>;
}
