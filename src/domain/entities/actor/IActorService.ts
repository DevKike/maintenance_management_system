import { IActor } from "./IActor";

export interface IActorService {
  createActor(actor: IActor): Promise<void>;
  getActors(page: number, limit: number): Promise<IActor[]>;
  getActorById(documentNumber: number): Promise<IActor | null>;
  getActorByDocumentNumber(document_number: number): Promise<IActor | null>;
  getActorByEmail(email: string): Promise<IActor | null>;
  getActorByPhoneNumber(phone_number: string): Promise<IActor | null>;
}
