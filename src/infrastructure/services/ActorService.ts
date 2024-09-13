import { IActor } from "../../domain/interfaces/actor/IActor";
import { IActorRepository } from "../../domain/interfaces/actor/IActorRepository";
import { IActorService } from "../../domain/interfaces/actor/IActorService";

export class ActorService implements IActorService {
  constructor(private readonly actorRepository: IActorRepository) {}

  async createActor(actor: IActor): Promise<void> {
    await this.actorRepository.save(actor);
  }
}
