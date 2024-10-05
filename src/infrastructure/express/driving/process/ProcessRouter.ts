import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { IProcessUseCase } from "../../../../domain/entities/process/IProcessUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/httpStatusCode/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";

export class ProcessRouter implements IRouterModule {
  private readonly processRouter: Router;

  constructor(private readonly processUseCase: IProcessUseCase) {
    this.processRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.processRouter.post("/", async (req, res) => {
      ResponseModel.manageResponse(this.processUseCase.createProcess(req.body), res, HttpStatusCode.CREATED, Message.PROCESS_CREATED_SUCCESSFULLY);
    });

    this.processRouter.get("/", async (req, res) => {
      ResponseModel.manageResponse(this.processUseCase.getAllProcesses(), res, HttpStatusCode.OK, Message.PROCESSES_OBTAINED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.processRouter;
  }
}
