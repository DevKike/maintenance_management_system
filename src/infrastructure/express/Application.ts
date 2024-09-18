import express, { Application as App } from "express";
import { AppDataSource } from "../database/config/typeorm";
import { Environment } from "../environment/Environment";
import { IRouterManager } from "./interfaces/IRouterManager";
import { RouterManager } from "./driving/RouterManager";
import { RoleRouter } from "./driving/role/RoleRouter";
import { RoleUseCase } from "../../application/usecases/role/RoleUseCase";
import { RoleService } from "../services/role/RoleService";
import { RoleRepository } from "../repositories/role/RoleRepository";
import { ActorRepository } from "../repositories/actor/ActorRepository";
import { ActorService } from "../services/actor/ActorService";
import { ActorUseCase } from "../../application/usecases/actor/ActorUseCase";
import { ActorRouter } from "./driving/actor/ActorRouter";

export class Application {
  public app: App;
  private readonly routerManager: IRouterManager;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.initRoutes();
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
    const actorRouter = new ActorRouter(actorUseCase);

    const routerManager = new RouterManager(this.app, roleRouter, actorRouter);
    routerManager.manageRoutes();
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
