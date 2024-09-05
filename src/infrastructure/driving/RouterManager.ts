import { IRouterManager } from "../../shared/interfaces/IRouterManager";
import { RoleRouter } from "./role/RoleRouter";
import express, { Application } from "express";

export class RouterManager implements IRouterManager {
  roleRouter: RoleRouter;
  app: Application;

  constructor(app: Application) {
    this.app = app;
    this.roleRouter = new RoleRouter();
  }

  manageRoutes(): void {
    this.app.use("/api", this.roleRouter.initRoutes());
  }
}
