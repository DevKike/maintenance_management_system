import { IMaintenanceType } from "./IMaintenanceType";

export interface IMaintenanceTypeRepository {
  create(maintenanceType: IMaintenanceType): Promise<void>;
}
