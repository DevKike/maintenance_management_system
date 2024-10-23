import { DataSource, Repository } from "typeorm";
import { Actor } from "../../database/entities/Actor";
import { IActorRepository } from "../../../domain/entities/actor/IActorRepository";
import { IActor, ICreateActor, IUpdateActor } from "../../../domain/entities/actor/IActor";

export class ActorRepository implements IActorRepository {
  private readonly actorRepository: Repository<Actor>;

  constructor(private readonly dataSource: DataSource) {
    this.actorRepository = this.dataSource.getRepository(Actor);
  }

  async save(actor: ICreateActor): Promise<void> {
    try {
      await this.actorRepository.save(actor);
    } catch (error) {
      throw error;
    }
  }

  async getAll(limit: number, skip: number): Promise<IActor[]> {
    try {
      return await this.actorRepository.find({
        take: limit,
        skip,
        relations: ["department", "role"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getByQueryParams(params: Partial<IActor>): Promise<IActor[]> {
    try {
      return await this.actorRepository.find({
        where: params,
        relations: ["department", "role"],
      });
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: number, actor: IUpdateActor): Promise<void> {
    try {
      const data = { id, actor };
      await this.actorRepository.update(id, actor);
    } catch (error) {
      throw error;
    }
  }
}
