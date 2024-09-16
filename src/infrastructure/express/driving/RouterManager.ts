import { Application } from "express";
import { IRouterManager } from "../interfaces/driving/IRouterManager";
import { ActorRouter } from "./actor/ActorRouter";
import { RoleRouter } from "./role/RoleRouter";

export class RouterManager implements IRouterManager {
  constructor(
    private readonly app: Application,
    private readonly roleRouter: RoleRouter,
    private readonly actorRouter: ActorRouter
  ) {}

  manageRoutes(): void {
    this.app.use("/api/roles", this.roleRouter.getRouter());
    this.app.use("/api/actors", this.actorRouter.getRouter());
  }
}
