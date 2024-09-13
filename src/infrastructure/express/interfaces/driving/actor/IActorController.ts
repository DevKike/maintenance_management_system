import { IHttpRequest } from "../../http/IHttpRequest";
import { IHttpResponse } from "../../http/IHttpResponse";

export interface IActorController {
  createActor(req: IHttpRequest, res: IHttpResponse, next: (error: Error) => void): Promise<void>;
}
