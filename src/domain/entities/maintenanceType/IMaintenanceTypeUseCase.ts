import { IMaintenanceType } from "./IMaintenanceType";

export interface IMaintenanceTypeUseCase {
    createMaintenanceType(maintenanceType: IMaintenanceType): Promise<void>;
  }