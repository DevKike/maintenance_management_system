import { IActor } from "./IActor";

export interface IActorUseCase {
  createActor(actor: IActor): Promise<void>;
  getActors(): Promise<IActor[]>;
}
