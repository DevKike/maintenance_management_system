import { IActor } from "../../../domain/entities/actor/IActor";
import { IActorService } from "../../../domain/entities/actor/IActorService";
import { IActorUseCase } from "../../../domain/entities/actor/IActorUseCase";

export class ActorUseCase implements IActorUseCase {
  constructor(private readonly actorService: IActorService) {}

  async createActor(actor: IActor): Promise<void> {
    await this.actorService.createActor(actor);
  }

  async getActors(): Promise<IActor[]> {
    return await this.actorService.getActors();
  }
}
