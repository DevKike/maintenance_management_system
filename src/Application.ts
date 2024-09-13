import express, { Application as App } from "express";
import { ErrorHandler } from "./infrastructure/express/middlewares/ErrorHandler";
import { RouterManager } from "./infrastructure/express/driving/RouterManager";
import { RoleRouter } from "./infrastructure/express/driving/role/RoleRouter";
import { RoleRepository } from "./infrastructure/repositories/role/RoleRepository";
import { RoleService } from "./infrastructure/services/role/RoleService";
import { RoleUseCase } from "./application/usecases/role/RoleUseCase";
import { RoleController } from "./infrastructure/express/driving/role/RoleController";
import { AppDataSource } from "./infrastructure/database/config/typeorm";
import { ActorRouter } from "./infrastructure/express/driving/actor/ActorRouter";
import { ActorRepository } from "./infrastructure/repositories/actor/ActorRepository";
import { ActorService } from "./infrastructure/services/actor/ActorService";
import { ActorUseCase } from "./application/usecases/actor/ActorUseCase";
import { ActorController } from "./infrastructure/express/driving/actor/ActorController";
import { Environment } from "./infrastructure/environment/Environment";

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
    const roleRepository = new RoleRepository(AppDataSource);
    const roleService = new RoleService(roleRepository);
    const roleUseCase = new RoleUseCase(roleService);
    const roleController = new RoleController(roleUseCase);

    const actorRepository = new ActorRepository(AppDataSource);
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
      await AppDataSource.initialize();
      console.log("Data source was init successfully");
    } catch (error) {
      console.error("Error", error);
      process.exit(1);
    }
  }

  public async listen(): Promise<void> {
    await this.initDatabase();
    this.app.listen(Environment.PORT, () => {
      console.log(`Server running at http://localhost/${Environment.PORT}`);
    });
  }
}
