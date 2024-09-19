import { IActor } from "./IActor";

export interface IActorService {
  createActor(actor: IActor): Promise<void>;
  getActors(): Promise<IActor[]>;
}
