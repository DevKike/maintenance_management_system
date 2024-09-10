import { IActor } from "../entities/IActor";

export interface IActorUseCase {
  createActor(actor: IActor): Promise<void>;
}
