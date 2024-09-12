import { IActor } from "../IActor";

export interface ICreateActorUseCase {
  execute(actor: IActor): Promise<void>;
}
