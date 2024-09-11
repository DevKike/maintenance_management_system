import { DataSource, Repository } from "typeorm";
import { IActor } from "../../domain/entities/IActor";
import { IActorRepository } from "../../domain/repositories/IActorRepository";
import { Actor } from "../database/entities/Actor";

export class ActorRepository implements IActorRepository {
  private actorRepository: Repository<Actor>;

  constructor(dataSource: DataSource) {
    this.actorRepository = dataSource.getRepository(Actor);
  }

  async save(actor: IActor): Promise<void> {
    const res = await this.actorRepository.insert(actor);
  }
}
