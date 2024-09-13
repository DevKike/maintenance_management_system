import { NextFunction, Request, Response, Router } from "express";
import { IRouterModule } from "../../interfaces/driving/IRouterModule";
import { schemaValidator } from "../../middlewares/schemaValidator";
import { createActorSchema } from "../../../schemas/actor/actorSchema";
import { IActorController } from "../../interfaces/driving/actor/IActorController";
import { ExpressHttpResponse } from "../../response/ExpressHttpResponse";
import { IHttpRequest } from "../../interfaces/http/IHttpRequest";
import { IHttpRouter } from "../../interfaces/http/IHttpRouter";
import { IHttpResponse } from "../../interfaces/http/IHttpResponse";

export class ActorRouter implements IRouterModule {
  private readonly actorRouter: IHttpRouter;

  constructor(private readonly actorController: IActorController) {
    this.initRoutes();
  }

  initRoutes(): void {
    this.actorRouter.post("/", (req, res , next) => {
      this.actorController.createActor(req, res, next);
    })
  }

  getRouter(): IHttpRouter {
    return this.actorRouter;
  }
}
