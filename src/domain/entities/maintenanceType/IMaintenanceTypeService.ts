import { ICreateMaintenanceType, IMaintenanceType } from "./IMaintenanceType";

export interface IMaintenanceTypeService {
  createMaintenanceType(maintenanceType: ICreateMaintenanceType): Promise<void>;
  getAllMaintenanceTypes(): Promise<IMaintenanceType[]>;
}
