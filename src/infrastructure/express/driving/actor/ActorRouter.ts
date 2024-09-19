import { IRouterModule } from "../../interfaces/IRouterModule";
import { HttpStatusCode } from "../../../../domain/enums/httpStatusCode/HttpStatusCode";
import { IActorUseCase } from "../../../../domain/entities/actor/IActorUseCase";
import { Router } from "express";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../middlewares/schemaValidator";
import { createActorSchema } from "../../../schemas/actor/actorSchema";
import { ResponseModel } from "../../response/ResponseModel";

export class ActorRouter implements IRouterModule {
  private readonly actorRouter: Router;

  constructor(private readonly actorUseCase: IActorUseCase) {
    this.actorRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.actorRouter.post("/", schemaValidator(createActorSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.actorUseCase.createActor(req.body), res, HttpStatusCode.CREATED, Message.ACTOR_CREATED_SUCCESSFULLY);
    });

    this.actorRouter.get("/", async (req, res) => {
      await ResponseModel.manageResponse(this.actorUseCase.getActors(), res, HttpStatusCode.OK, Message.ACTORS_OBTAINED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.actorRouter;
  }
}
