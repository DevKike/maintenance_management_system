import { IActor } from "./IActor";

export interface IActorRepository {
  save(actor: IActor): Promise<void>;
  getAll(limit: number, skip: number): Promise<IActor[]>;
  getByQueryParams(params: Partial<IActor>): Promise<IActor[]>;
}
