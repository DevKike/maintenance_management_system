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

  async getActors(page: number, limit: number): Promise<IActor[]> {
    try {
      const skip = (page - 1) * limit;
      return await this.actorRepository.getAll(limit, skip);
    } catch (error) {
      throw error;
    }
  }

  async getActorById(id: number): Promise<IActor | null> {
    try {
      return await this.actorRepository.getOneById(id);
    } catch (error) {
      throw error;
    }
  }
}
