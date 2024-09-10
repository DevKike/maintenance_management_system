import { IActor } from "../entities/IActor";

export interface IActorService {
  createActor(actor: IActor): Promise<void>;
}
