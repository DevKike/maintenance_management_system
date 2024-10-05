import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { MaintenanceUseCase } from "../../../../application/usecases/maintenance/MaintenanceUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/httpStatusCode/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../middlewares/schemaValidator";
import { createMaintenanceSchema } from "../../../schemas/maintenance/maintenanceSchema";

export class MaintenanceRouter implements IRouterModule {
  private readonly maintenanceRouter: Router;

  constructor(private readonly maintenanceUseCase: MaintenanceUseCase) {
    this.maintenanceRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.maintenanceRouter.post("/", schemaValidator(createMaintenanceSchema), async (req, res) => {
        await ResponseModel.manageResponse(this.maintenanceUseCase.createMaintenance(req.body), res, HttpStatusCode.CREATED, Message.MAINTENANCE_CREATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.maintenanceRouter;
  }
}
  