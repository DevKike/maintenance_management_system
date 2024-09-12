import { DataSource, Repository } from "typeorm";
import { IActor } from "../../domain/interfaces/actor/IActor";
import { IActorRepository } from "../../domain/interfaces/actor/IActorRepository";
import { Actor } from "../database/entities/Actor";

export class ActorRepository implements IActorRepository {
  private readonly actorRepository: Repository<Actor>;

  constructor(private readonly dataSource: DataSource) {
    this.actorRepository = this.dataSource.getRepository(Actor);
  }

  async save(actor: IActor): Promise<void> {
    try {
      await this.actorRepository.insert(actor);
    } catch (error) {
      throw error;
    }
  }
}
