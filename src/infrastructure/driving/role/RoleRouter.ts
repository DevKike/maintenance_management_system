import { Router } from "express";
import { RoleController } from "./RoleController";
import { IRouterModule } from "../../../shared/interfaces/IRouterModule";
import { IRoleController } from "../../../shared/interfaces/IRoleController";

export class RoleRouter implements IRouterModule {
  public readonly roleRouter: Router;
  private readonly roleController: IRoleController;

  constructor() {
    this.roleRouter = Router();
    this.roleController = new RoleController();
  }

  initRoutes(): Router {
    this.roleRouter.get("/roles", (req, res) => {
      this.roleController.getRoles(res);
    });
    return this.roleRouter;
  }
}
