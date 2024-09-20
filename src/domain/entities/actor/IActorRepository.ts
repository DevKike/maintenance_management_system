import { IActor } from "./IActor";

export interface IActorRepository {
  save(actor: IActor): Promise<void>;
  getAll(): Promise<IActor[]>;
  getOneById(id: number): Promise<IActor | null>;
}
