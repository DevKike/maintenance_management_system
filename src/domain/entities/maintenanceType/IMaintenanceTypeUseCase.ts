import { ICreateMaintenanceType, IMaintenanceType } from "./IMaintenanceType";

export interface IMaintenanceTypeUseCase {
  createMaintenanceType(maintenanceType: ICreateMaintenanceType): Promise<void>;
  getAllMaintenanceTypes(): Promise<IMaintenanceType[]>;
}
