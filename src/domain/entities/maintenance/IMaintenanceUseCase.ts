import { IMaintenance, IMaintenanceType } from "./IMaintenance";

export interface IMaintenanceUseCase {
  createMaintenance(maintenance: IMaintenance, departmentId: number): Promise<void>;
  getAllMaintenances(): Promise<IMaintenance[]>;
  getMaintenanceById(id: number): Promise<IMaintenance | null>;
  updateMaintenanceById(id: number, maintenance: IMaintenance): Promise<void>;
}

export interface IMaintenanceTypeUseCase {
  createMaintenanceType(maintenanceType: IMaintenanceType): Promise<void>;
}