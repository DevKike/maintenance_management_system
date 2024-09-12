import { IActor } from "../../../domain/interfaces/actor/IActor";
import { ICreateActorUseCase } from "../../../domain/interfaces/actor/usecases/ICreateActorUseCase";
//import { SizeException } from "../../../shared/exceptions/SizeException";
//import { MessageConstants } from "../../../presentation/messages/MessageConstants";
import { IActorService } from "../../../domain/interfaces/actor/IActorService";

export class CreateActorUseCase implements ICreateActorUseCase {
  constructor(private readonly actorService: IActorService) {}

  async execute(actor: IActor): Promise<void> {
    try {
      const documentNumber = actor.document_number.toString();
      /* if (documentNumber.length > 10) {
        throw new SizeException(MessageConstants.DOCUMENT_NUMBER_TOO_LONG);
      } */

      await this.actorService.createActor(actor);
    } catch (error) {
      throw error;
    }
  }
}
