import { Application } from "express";
import { IRouterManager } from "../interfaces/IRouterManager";
import { ActorRouter } from "./actor/ActorRouter";
import { RoleRouter } from "./role/RoleRouter";
import { DepartmentRouter } from "./department/DepartmentRouter";

export class RouterManager implements IRouterManager {
  constructor(
    private readonly app: Application,
    private readonly roleRouter: RoleRouter,
    private readonly actorRouter: ActorRouter,
    private readonly departmentRouter: DepartmentRouter
  ) {}

  manageRoutes(): void {
    this.app.use("/api/roles", this.roleRouter.getRouter());
    this.app.use("/api/actors", this.actorRouter.getRouter());
    this.app.use("/api/departments", this.departmentRouter.getRouter());
  }
}
