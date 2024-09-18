import express, { Application as App } from "express";
import { ErrorHandler } from "./express/middlewares/ErrorHandler";
import { AppDataSource } from "./database/config/typeorm";
import { Environment } from "./environment/Environment";
import { IRouterManager } from "./express/interfaces/IRouterManager";
import { RouterManager } from "./express/driving/RouterManager";
import { RoleRouter } from "./express/driving/role/RoleRouter";
import { RoleUseCase } from "../application/usecases/role/RoleUseCase";
import { RoleService } from "./services/role/RoleService";
import { RoleRepository } from "./repositories/role/RoleRepository";
import { ActorRepository } from "./repositories/actor/ActorRepository";
import { ActorService } from "./services/actor/ActorService";
import { ActorUseCase } from "../application/usecases/actor/ActorUseCase";
import { ActorRouter } from "./express/driving/actor/ActorRouter";
import { ResponseModel } from "./express/response/ResponseModel";

export class Application {
  public app: App;
  private routerManager: IRouterManager;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
  }

  private initMiddlewares(): void {
    this.app.use(express.json());
  }

  private initRoutes(): void {
    const roleRepository = new RoleRepository(AppDataSource);
    const roleService = new RoleService(roleRepository);
    const roleUseCase = new RoleUseCase(roleService);
    const roleRouter = new RoleRouter(roleUseCase);

    const actorRepository = new ActorRepository(AppDataSource);
    const actorService = new ActorService(actorRepository);
    const actorUseCase = new ActorUseCase(actorService);
    const actorResponseModel = new ResponseModel();
    const actorRouter = new ActorRouter(actorUseCase, actorResponseModel);

    const routerManager = new RouterManager(this.app, roleRouter, actorRouter);
    routerManager.manageRoutes();
  }

  private initErrorHandling(): void {
    this.app.use(ErrorHandler.handle);
  }

  private async initDatabase(): Promise<void> {
    try {
      await AppDataSource.initialize();
      console.log("Data source was init successfully");
    } catch (error) {
      console.error("Error", error);
      process.exit(1);
    }
  }

  public async listen(): Promise<void> {
    await this.initDatabase();
    this.app.listen(Environment.PORT);
    console.log(`Server running at http://localhost:${Environment.PORT}`);
  }
}
