import { IMaintenanceType } from "./IMaintenanceType";

export interface IMaintenanceTypeService {
  createMaintenanceType(maintenanceType: IMaintenanceType): Promise<void>;
}
