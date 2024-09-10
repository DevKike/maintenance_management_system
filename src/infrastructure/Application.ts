import express, { Application as App } from "express";
import { ErrorHandler } from "./middleware/ErrorHandler";
import { RouterManager } from "./driving/RouterManager";
import { RoleRouter } from "./driving/role/RoleRouter";
import { RoleRepository } from "./repositories/RoleRepository";
import { RoleService } from "./services/RoleService";
import { RoleUseCase } from "../application/usecases/RoleUseCase";
import { RoleController } from "./driving/role/RoleController";
import { appDataSource } from "./database/orm/config/typeorm";
import { Message } from "../shared/messages/Message";
import { Constant } from "../shared/constants/Constant";
import { ActorRouter } from "./driving/actor/ActorRouter";
import { ActorRepository } from "./repositories/ActorRepository";
import { ActorService } from "./services/ActorService";
import { ActorUseCase } from "../application/usecases/ActorUseCase";
import { ActorController } from "./driving/actor/ActorController";

export class Application {
  public app: App;

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
    const roleRepository = new RoleRepository(appDataSource);
    const roleService = new RoleService(roleRepository);
    const roleUseCase = new RoleUseCase(roleService);
    const roleController = new RoleController(roleUseCase);

    const actorRepository = new ActorRepository(appDataSource);
    const actorService = new ActorService(actorRepository);
    const actorUseCase = new ActorUseCase(actorService);
    const actorController = new ActorController(actorUseCase);

    const roleRouter = new RoleRouter(roleController);
    const actorRouter = new ActorRouter(actorController)

    const routerManager = new RouterManager(this.app, roleRouter, actorRouter);
    routerManager.manageRoutes();
  }

  private initErrorHandling(): void {
    this.app.use(ErrorHandler.handle);
  }

  private async initDatabase(): Promise<void> {
    try {
      await appDataSource.initialize();
      console.log(Message.INITIALIZED_DATA_SOURCE);
    } catch (error) {
      console.error(Message.DATA_SOURCE_ERROR, error);
      process.exit(1);
    }
  }

  public async listen(): Promise<void> {
    await this.initDatabase();
    this.app.listen(Constant.PORT, () => {
      console.log(Message.SERVER_RUNNING_AT_PORT(Constant.PORT));
    });
  }
}
