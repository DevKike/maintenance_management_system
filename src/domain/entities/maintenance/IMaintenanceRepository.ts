import { ICreateMaintenance, IMaintenance, IUpdateMaintenance } from "./IMaintenance";

export interface IMaintenanceRepository {
  create(maintenance: ICreateMaintenance): Promise<void>;
  getAll(): Promise<IMaintenance[]>;
  getOneById(id: number): Promise<IMaintenance | null>;
  updateById(id: number, maintenance: IUpdateMaintenance): Promise<void>;
}