import { IRouterModule } from "../../interfaces/driving/IRouterModule";
import { IRoleController } from "../../interfaces/driving/role/IRoleController";
import { IHttpRequest } from "../../interfaces/http/IHttpRequest";
import { IHttpRouter } from "../../interfaces/http/IHttpRouter";
import { IHttpResponse } from "../../interfaces/http/IHttpResponse";

export class RoleRouter implements IRouterModule {
  private readonly roleRouter: IHttpRouter;
  
  constructor(
    private readonly roleController: IRoleController) {
    this.initRoutes();
  }

  initRoutes(): void {
    this.roleRouter.get(
      "/",
      (req: IHttpRequest, res: IHttpResponse, next: (error: Error) => void) => {
        this.roleController.getRoles(req, res, next);
      }
    );
  }

  getRouter(): IHttpRouter {
    return this.roleRouter;
  }
}
