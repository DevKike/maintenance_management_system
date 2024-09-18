import { IRouterModule } from "../../interfaces/IRouterModule";
import { HttpStatusCode } from "../../../../domain/enums/httpStatusCode/HttpStatusCode";
import { IRoleUseCase } from "../../../../domain/entities/role/IRoleUseCase";
import { Router } from "express";
import { ResponseModel } from "../../response/ResponseModel";
import { Message } from "../../../../domain/enums/message/Message";

export class RoleRouter implements IRouterModule {
  private readonly roleRouter: Router;

  constructor(private readonly roleUseCase: IRoleUseCase) {
    this.roleRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.roleRouter.get("/", async (req, res) => {
      this.roleUseCase.getRoles()
      .then((result) => {
        return ResponseModel.manageResponse(Promise.resolve(result), res, HttpStatusCode.OK, Message.ROLE_OBTAINED_SUCCESSFULLY);
      })
      .catch((error) => {
        return ResponseModel.manageResponse(Promise.resolve(error), res, HttpStatusCode.INTERNAL_SERVER_ERROR, Message.INTERNAL_SERVER_ERROR)
      })
    });
  }

  getRouter(): Router {
    return this.roleRouter;
  }
}
