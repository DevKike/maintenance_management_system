import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { DepartmentMaintenanceTypeAssignmentUseCase } from "../../../../application/usecases/departmentMaintenanceTypeAssignment/DepartmentMaintenanceTypeAssignmentUseCase";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../middlewares/schemaValidator";
import { createDepartmentMaintenanceTypeAssignmentSchema } from "../../../schemas/departmentMaintenanceTypeAssignment/departmentMaintenanceTypeAssignmentSchema";

export class DepartmentMaintenanceTypeAssignmentRouter implements IRouterModule {
  private readonly departmentMaintenanceTypeAssignmentRouter: Router;

  constructor(private readonly departmentMaintenanceTypeAssignmentUseCase: DepartmentMaintenanceTypeAssignmentUseCase) {
    this.departmentMaintenanceTypeAssignmentRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.departmentMaintenanceTypeAssignmentRouter.post("/", schemaValidator(createDepartmentMaintenanceTypeAssignmentSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.departmentMaintenanceTypeAssignmentUseCase.createDepartmentMaintenanceTypeAssignment(req.body), res, HttpStatusCode.CREATED, Message.DEPARTMENT_MAINTENANCE_TYPE_ASSIGNMENT_CREATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.departmentMaintenanceTypeAssignmentRouter;
  }
}
