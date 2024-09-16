import { IRouterModule } from "../../interfaces/driving/IRouterModule";
import { HttpStatusCode } from "../../../../domain/enums/httpStatusCode/HttpStatusCode";
import { IActorUseCase } from "../../../../domain/entities/actor/IActorUseCase";
import { Router } from "express";

export class ActorRouter implements IRouterModule {
  private readonly actorRouter: Router;

  constructor(private readonly actorUseCase: IActorUseCase) {
    this.actorRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.actorRouter.post("/", async (req, res, next) => {
      try {
        const actor = req.body;
        await this.actorUseCase.createActor(actor);
        res.status(HttpStatusCode.CREATED).json({message: "User created with success"});
      } catch (error) {
        next(error);
      }
    });
  }

  getRouter(): Router {
    return this.actorRouter;
  }
}
