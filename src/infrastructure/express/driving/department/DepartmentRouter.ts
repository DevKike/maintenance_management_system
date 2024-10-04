import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/httpStatusCode/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { IDepartmentUseCase } from "../../../../domain/entities/department/IDepartmentUseCase";

export class DepartmentRouter implements IRouterModule {
  private readonly departmentRouter: Router;

  constructor(private readonly departmentUseCase: IDepartmentUseCase) {
    this.departmentRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.departmentRouter.post("/", async (req, res) => {
      ResponseModel.manageResponse(this.departmentUseCase.createDepartment(req.body), res, HttpStatusCode.CREATED, Message.DEPARTMENT_CREATED_SUCCESSFULLY);
    });
  }
  getRouter(): Router {
    return this.departmentRouter;
  }
}
