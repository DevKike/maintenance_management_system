import { IActor } from "./IActor";

export interface IActorService {
  createActor(actor: IActor): Promise<void>;
  getActors(page: number, limit: number): Promise<IActor[]>;
  getOneByDocumentNumber(documentNumber: number): Promise<IActor | null>;
}
