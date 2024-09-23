import { IActor } from "./IActor";

export interface IActorRepository {
  save(actor: IActor): Promise<void>;
  getAll(limit: number, skip: number): Promise<IActor[]>;
  getOneById(id: number): Promise<IActor | null>;
}
