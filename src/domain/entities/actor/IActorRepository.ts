import { IActor } from "./IActor";

export interface IActorRepository {
  save(actor: IActor): Promise<void>;
  getAll(): Promise<IActor[]>;
}
