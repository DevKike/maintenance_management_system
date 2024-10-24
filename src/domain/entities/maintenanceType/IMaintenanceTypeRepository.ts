import { ICreateMaintenanceType, IMaintenanceType } from "./IMaintenanceType";

export interface IMaintenanceTypeRepository {
  save(maintenanceType: ICreateMaintenanceType): Promise<void>;
  getAll(): Promise<IMaintenanceType[]>;
}
