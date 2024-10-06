import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/httpStatusCode/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../middlewares/schemaValidator";
import { IMaintenanceTypeUseCase } from "../../../../domain/entities/maintenance/IMaintenanceUseCase";
import { createMaintenanceTypeSchema } from "../../../schemas/maintenance/maintenanceTypeSchema";

export class MaintenanceTypeRouter implements IRouterModule {
  private readonly maintenanceTypeRouter: Router;

  constructor(private readonly maintenanceTypeUseCase: IMaintenanceTypeUseCase) {
    this.maintenanceTypeRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.maintenanceTypeRouter.post("/", schemaValidator(createMaintenanceTypeSchema), async (req, res) => {
        await ResponseModel.manageResponse(this.maintenanceTypeUseCase.createMaintenanceType(req.body), res, HttpStatusCode.CREATED, Message.MAINTENANCE_TYPE_CREATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.maintenanceTypeRouter;
  }
}