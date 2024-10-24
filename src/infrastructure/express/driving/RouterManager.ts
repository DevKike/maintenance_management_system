import { Application } from "express";
import { IRouterManager } from "../interfaces/IRouterManager";
import { ActorRouter } from "./actor/ActorRouter";
import { RoleRouter } from "./role/RoleRouter";
import { DepartmentRouter } from "./department/DepartmentRouter";
import { MaintenanceRouter } from "./maintenance/MaintenanceRouter";
import { MaintenanceTypeRouter } from "./maintenance/MaintenanceTypeRouter";

export class RouterManager implements IRouterManager {
  constructor(
    private readonly app: Application,
    private readonly roleRouter: RoleRouter,
    private readonly actorRouter: ActorRouter,
    private readonly departmentRouter: DepartmentRouter,
    private readonly maintenanceTypeRouter: MaintenanceTypeRouter,
    private readonly maintenanceRouter: MaintenanceRouter,
  ) {}

  manageRoutes(): void {
    this.app.use("/api/roles", this.roleRouter.getRouter());
    this.app.use("/api/actors", this.actorRouter.getRouter());
    this.app.use("/api/departments", this.departmentRouter.getRouter());
    this.app.use("/api/maintenances-types/", this.maintenanceTypeRouter.getRouter());
    this.app.use("/api/department-maintenance-type-assignments/", this.);
    this.app.use("/api/maintenances", this.maintenanceRouter.getRouter());
  }
}
