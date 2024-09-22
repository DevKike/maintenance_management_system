import { DataSource, Repository } from "typeorm";
import { Actor } from "../../database/entities/Actor";
import { IActorRepository } from "../../../domain/entities/actor/IActorRepository";
import { IActor } from "../../../domain/entities/actor/IActor";

export class ActorRepository implements IActorRepository {
  private readonly actorRepository: Repository<Actor>;

  constructor(private readonly dataSource: DataSource) {
    this.actorRepository = this.dataSource.getRepository(Actor);
  }

  async save(actor: IActor): Promise<void> {
    try {
      await this.actorRepository.save(actor);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IActor[]> {
    try {
      return await this.actorRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id: number): Promise<IActor | null> {
    try {
      return await this.actorRepository.findOneBy({ document_number: id });
    } catch (error) {
      throw error;
    }
  }
}
