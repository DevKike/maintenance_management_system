import { IRouterModule } from "../../interfaces/IRouterModule";
import { HttpStatusCode } from "../../../../domain/enums/httpStatusCode/HttpStatusCode";
import { IRoleUseCase } from "../../../../domain/entities/role/IRoleUseCase";
import { Router } from "express";

export class RoleRouter implements IRouterModule {
  private readonly roleRouter: Router;

  constructor(private readonly roleUseCase: IRoleUseCase) {
    this.roleRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.roleRouter.get("/", async (req, res, next) => {
      try {
        const roles = await this.roleUseCase.getRoles();
        res.status(HttpStatusCode.OK).json({ roles: roles });
      } catch (error) {
        next(error);
      }
    });
  }

  getRouter(): Router {
    return this.roleRouter;
  }
}
