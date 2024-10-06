import { IMaintenance, IMaintenanceType } from "./IMaintenance";

export interface IMaintenanceService {
  createMaintenance(maintenance: IMaintenance, departmentId: number): Promise<void>;
  getAllMaintenances(): Promise<IMaintenance[]>;
  getMaintenanceById(id: number): Promise<IMaintenance | null>;
  updateMaintenanceById(id: number, maintenance: IMaintenance): Promise<void>;
}

export interface IMaintenanceTypeService {
  createMaintenanceType(maintenanceType: IMaintenanceType): Promise<void>;
}