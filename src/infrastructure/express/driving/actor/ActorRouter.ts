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
      const actor = req.body;
      await this.actorUseCase.createActor(actor)
        .then((result) => {
          return ResponseModel.manageResponse(Promise.resolve(result), res, HttpStatusCode.CREATED, Message.ACTOR_CREATED_SUCCESSFULLY);
        })
        .catch((error) => {
          return ResponseModel.manageResponse(Promise.resolve(error), res, HttpStatusCode.INTERNAL_SERVER_ERROR, Message.INTERNAL_SERVER_ERROR);
        });
    });

    this.actorRouter.get("/", async (req, res) => {
      await this.actorUseCase.getActors()
      .then((result) => {
        return ResponseModel.manageResponse(Promise.resolve(result), res, HttpStatusCode.OK, Message.ACTORS_OBTAINED_SUCCESSFULLY);
      });
    });
  }

  getRouter(): Router {
    return this.actorRouter;
  }
}
