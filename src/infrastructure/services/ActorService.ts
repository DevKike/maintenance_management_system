import { IActor } from "../../domain/entities/IActor";
import { IActorService } from "../../domain/services/IActorService";
import { ActorRepository } from "../repositories/ActorRepository";

export class ActorService implements IActorService {
  private actorRepository: ActorRepository;

  constructor(actorRepository: ActorRepository) {
    this.actorRepository = actorRepository;
  }

  async createActor(actor: IActor): Promise<void> {
    await this.actorRepository.save(actor);
  }
}
