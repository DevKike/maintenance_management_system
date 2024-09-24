import { IActor } from "./IActor";

export interface IActorRepository {
  save(actor: IActor): Promise<void>;
  getAll(limit: number, skip: number): Promise<IActor[]>;
  getOneByParams(params: keyof IActor, value: string | number): Promise<IActor | null>;
}
