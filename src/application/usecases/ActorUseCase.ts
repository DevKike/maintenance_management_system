import { IActor } from "../../domain/entities/IActor";
import { IActorUseCase } from "../../domain/usecases/IActorUseCase";
import { ActorService } from "../../infrastructure/services/ActorService";
import { SizeException } from "../../shared/exceptions/SizeException";
import { Message } from "../../shared/messages/Message";

export class ActorUseCase implements IActorUseCase {
  private actorService: ActorService;

  constructor(actorService: ActorService) {
    this.actorService = actorService;
  }

  async createActor(actor: IActor): Promise<void> {
    try {
      const documentNumber = actor.document_number.toString();
      if (documentNumber.length > 10) {
        throw new SizeException(Message.DOCUMENT_NUMBER_TOO_LONG);
      }

      await this.actorService.createActor(actor);
    } catch (error) {
      throw error;
    }
  }
}
