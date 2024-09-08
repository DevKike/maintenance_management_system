import { IRouterManager } from "../../shared/interfaces/IRouterManager";
import { RoleRouter } from "./role/RoleRouter";
import { Application } from "express";

export class RouterManager implements IRouterManager {
  private app: Application;
  private roleRouter: RoleRouter;

  constructor(app: Application, roleRouter: RoleRouter) {
    this.app = app;
    this.roleRouter = roleRouter;
  }

  manageRoutes(): void {
    this.app.use("/api", this.roleRouter.getRouter());
  }
}
