import express, { Application as App } from "express";
import { ErrorHandler } from "./express/middlewares/ErrorHandler";
import { RouterManager } from "./express/driving/RouterManager";
import { RoleRouter } from "./express/driving/role/RoleRouter";
import { RoleRepository } from "./repositories/role/RoleRepository";
import { RoleService } from "./services/role/RoleService";
import { RoleUseCase } from "../application/usecases/role/RoleUseCase";
import { RoleController } from "./express/driving/role/RoleController";
import { AppDataSource } from "./database/config/typeorm";
import { ActorRouter } from "./express/driving/actor/ActorRouter";
import { ActorRepository } from "./repositories/actor/ActorRepository";
import { ActorService } from "./services/actor/ActorService";
import { ActorUseCase } from "../application/usecases/actor/ActorUseCase";
import { ActorController } from "./express/driving/actor/ActorController";
import { Environment } from "./environment/Environment";
import { ExpressServer } from "./express/server/ExpressServer";
import { IHttpServer } from "./express/interfaces/http/IHttpServer";
import { IRouterManager } from "./express/interfaces/driving/IRouterManager";

export class Application {
  private httpServer: IHttpServer;
  private routerManager: IRouterManager;

  constructor(httpServer: IHttpServer, routerManager: IRouterManager) {
    this.httpServer = httpServer;
    this.routerManager = routerManager;
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
  }

  private initMiddlewares(): void {
    this.httpServer.setMiddleware(express.json());
  }

  private initRoutes(): void {
    this.routerManager.manageRoutes();
  }

  private initErrorHandling(): void {
    this.httpServer.use(ErrorHandler.handle);
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
    await this.httpServer.listen(Environment.PORT);
    console.log(`Server running at http://localhost/${Environment.PORT}`);
  }
}
