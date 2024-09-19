import { IActor } from "../../../domain/entities/actor/IActor";
import { IActorRepository } from "../../../domain/entities/actor/IActorRepository";
import { IActorService } from "../../../domain/entities/actor/IActorService";

export class ActorService implements IActorService {
  constructor(private readonly actorRepository: IActorRepository) {}

  async createActor(actor: IActor): Promise<void> {
    try {
      await this.actorRepository.save(actor);
    } catch (error) {
      throw error;
    }
  }

  async getActors(): Promise<IActor[]> {
    try {
      return await this.actorRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
