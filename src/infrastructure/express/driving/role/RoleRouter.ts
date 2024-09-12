import { Router } from "express";
import { IRouterModule } from "../../interfaces/driving/IRouterModule";
import { RoleController } from "./RoleController";

export class RoleRouter implements IRouterModule {
  private roleRouter: Router;
  private roleController: RoleController;

  constructor(roleController: RoleController) {
    this.roleRouter = Router();
    this.roleController = roleController;
    this.initRoutes();
  }

  initRoutes(): void {
    this.roleRouter.get("/", (req, res, next) => {
      this.roleController.getRoles(req, res, next);
    });
  }

  getRouter(): Router {
    return this.roleRouter;
  }
}
