import { IActor } from "../../../domain/interfaces/actor/IActor";
import { IActorUseCase } from "../../../domain/interfaces/actor/IActorUseCase";
import { IActorService } from "../../../domain/interfaces/actor/IActorService";

export class ActorUseCase implements IActorUseCase {
  constructor(private readonly actorService: IActorService) {}

  async createActor(actor: IActor): Promise<void> {
    await this.actorService.createActor(actor);
  }
}
