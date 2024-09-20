import { IActor } from "../../../domain/entities/actor/IActor";
import { IActorService } from "../../../domain/entities/actor/IActorService";
import { IActorUseCase } from "../../../domain/entities/actor/IActorUseCase";
import { Message } from "../../../domain/enums/message/Message";
import { AlreadyExistsException } from "../../../domain/exceptions/AlreadyExistsException";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";

export class ActorUseCase implements IActorUseCase {
  constructor(private readonly actorService: IActorService) {}

  async createActor(actor: IActor): Promise<void> {
    const isExisting = await this.actorService.getOneByDocumentNumber(actor.document_number);

    if (isExisting) {
      throw new AlreadyExistsException(Message.ACTOR_ALREADY_EXISTS_EXCEPTION);
    }
    
    await this.actorService.createActor(actor);
  }

  async getActors(): Promise<IActor[]> {
    const actors = await this.actorService.getActors();

    if(!actors || actors.length === 0) {
      throw new NotFoundException(Message.NOT_ACTORS_FOUND);
    }

    return actors;
  }
}
