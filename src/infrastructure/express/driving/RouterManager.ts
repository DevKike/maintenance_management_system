import { IHttpServer } from "../interfaces/http/IHttpServer";
import { IRouterManager } from "../interfaces/driving/IRouterManager";
import { ActorRouter } from "./actor/ActorRouter";
import { RoleRouter } from "./role/RoleRouter";

export class RouterManager implements IRouterManager {

  constructor(private readonly httpServer: IHttpServer, private readonly roleRouter: RoleRouter, private readonly actorRouter: ActorRouter) {
  }

  manageRoutes(): void {
    this.httpServer.route("/api/roles", this.roleRouter.getRouter());
    this.httpServer.route("/api/actors", this.actorRouter.getRouter());
  }
}
