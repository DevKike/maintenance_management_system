import { IActorController } from "../../interfaces/driving/actor/IActorController";
import { IActorUseCase } from "../../../../domain/interfaces/actor/IActorUseCase";
import { IHttpRequest } from "../../interfaces/http/IHttpRequest";
import { IHttpResponse } from "../../interfaces/http/IHttpResponse";
import { HttpStatusCode } from "../../http/HttpStatusCode";

export class ActorController implements IActorController {
  constructor(private readonly actorUseCase: IActorUseCase) {}

  async createActor(
    req: IHttpRequest,
    res: IHttpResponse,
    next: (error: Error) => void
  ): Promise<void> {
    try {
      await this.actorUseCase.createActor(req.body);
      res
        .statusCode(HttpStatusCode.CREATED)
        .json("Actor was created successfully");
    } catch (error) {
      next(error as Error);
    }
  }
}
