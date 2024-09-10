import { IActor } from "../entities/IActor";

export interface IActorRepository {
  save(actor: IActor): Promise<void>;
}
