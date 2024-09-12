import { Request, Response, NextFunction} from "express";
import { IActorController } from "../../interfaces/driving/actor/IActorController";
import { ICreateActorUseCase } from "../../../../domain/interfaces/actor/usecases/ICreateActorUseCase";
import { HttpResponseModel } from "../../http/HttpResponseModel";
import { HttpStatusCode } from "../../http/HttpStatusCode";

export class ActorController implements IActorController {
  private httpResponseModel: HttpResponseModel;

  constructor(private readonly createActorUseCase: ICreateActorUseCase) {
    this.createActorUseCase = createActorUseCase;
    this.httpResponseModel = new HttpResponseModel();
  }

  async createActor(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.createActorUseCase.execute(req.body);
      await this.httpResponseModel.manageResponse(Promise.resolve(), res, HttpStatusCode.CREATED, "Actor was created successfully");     
    } catch (error) {
      next(error);
    }
  }
}
