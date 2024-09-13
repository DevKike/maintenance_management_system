import { IRoleController } from "../../interfaces/driving/role/IRoleController";
import { IRoleUseCase } from "../../../../domain/interfaces/role/IRoleUseCase";
import { HttpStatusCode } from "../../http/HttpStatusCode";
import { IHttpResponse } from "../../interfaces/http/IHttpResponse";
import { IHttpRequest } from "../../interfaces/http/IHttpRequest";

export class RoleController implements IRoleController {
  constructor(private readonly roleUseCase: IRoleUseCase) {}

  async getRoles(
    req: IHttpRequest,
    res: IHttpResponse,
    next: (error: Error) => void
  ): Promise<void> {
    try {
      const roles = await this.roleUseCase.getRoles();
      res.statusCode(HttpStatusCode.OK).json(roles);
    } catch (error) {
      next(error as Error);
    }
  }
}
