import { IActor } from "./IActor";

export interface IActorService {
  createActor(actor: IActor): Promise<void>;
  getActors(page: number, limit: number): Promise<IActor[]>;
  getActorById(documentNumber: number): Promise<IActor | null>;
}
