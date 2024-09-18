import { IRouterModule } from "../../interfaces/IRouterModule";
import { HttpStatusCode } from "../../../../domain/enums/httpStatusCode/HttpStatusCode";
import { IActorUseCase } from "../../../../domain/entities/actor/IActorUseCase";
import { Router } from "express";
import { ResponseModel } from "../../response/ResponseModel";
import { Message } from "../../../../domain/enums/message/Message";
import { IResponseModel } from "../../interfaces/IResponseModel";

export class ActorRouter implements IRouterModule {
  private readonly actorRouter: Router;

  constructor(private readonly actorUseCase: IActorUseCase, private readonly responseModel: IResponseModel) {
    this.actorRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.actorRouter.post("/", async (req, res, next) => {
      try {
        const actor = req.body;
        const promise = await this.actorUseCase.createActor(actor);
        await this.responseModel.manageResponse(Promise.resolve(promise), res, HttpStatusCode.CREATED, Message.USER_CREATED_SUCCESSFULLY);
      } catch (error) {
        next(error);
      }
    });
  }

  getRouter(): Router {
    return this.actorRouter;
  }
}
