import { Router } from "express";
import { IRouterModule } from "../../../shared/interfaces/IRouterModule";
import { ActorController } from "./ActorController";

export class ActorRouter implements IRouterModule {
  private actorRouter: Router;
  private actorController: ActorController;

  constructor(actorController: ActorController) {
    this.actorRouter = Router();
    this.actorController = actorController;
    this.initRoutes();
  }

  initRoutes(): void {
    this.actorRouter.post("/actors", (req, res, next) => {
      this.actorController.createActor(req, res, next);
    });
  }

  getRouter(): Router {
    return this.actorRouter;
  }
}
