import { Request, Response, NextFunction} from "express";
import { ActorUseCase } from "../../../application/usecases/ActorUseCase";
import { IActorController } from "../../../shared/interfaces/IActorController";
import { ResponseModel } from "../../../shared/response/ResponseModel";
import { HttpStatusCode } from "../../../shared/httpStatus/HttpStatusCode";
import { Message } from "../../../shared/messages/Message";

export class ActorController implements IActorController {
  private actorUseCase: ActorUseCase;
  private responseModel: ResponseModel;

  constructor(actorUSeCase: ActorUseCase) {
    this.actorUseCase = actorUSeCase;
    this.responseModel = new ResponseModel();
  }

  async createActor(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.actorUseCase.createActor(req.body);
      await this.responseModel.manageResponse(Promise.resolve(), res, HttpStatusCode.CREATED, Message.ACTOR_CREATED_SUCCESSFULLY);     
    } catch (error) {
      next(error);
    }
  }
}
