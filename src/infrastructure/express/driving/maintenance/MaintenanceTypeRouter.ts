import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../middlewares/schemaValidator";
import { createMaintenanceTypeSchema } from "../../../schemas/maintenance/maintenanceTypeSchema";
import { IMaintenanceTypeUseCase } from "../../../../domain/entities/maintenanceType/IMaintenanceTypeUseCase";

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
