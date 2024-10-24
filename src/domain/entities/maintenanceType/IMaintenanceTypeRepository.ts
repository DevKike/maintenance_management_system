import { IMaintenanceType } from "./IMaintenanceType";

export interface IMaintenanceTypeRepository {
  save(maintenanceType: IMaintenanceType): Promise<void>;
  getAll(): Promise<IMaintenanceType[]>;
}
