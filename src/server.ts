import { Application } from "./infrastructure/Application";
import { RouterManager } from "./infrastructure/express/driving/RouterManager";
import { ExpressServer } from "./infrastructure/express/server/ExpressServer";
import { RoleRouter } from "./infrastructure/express/driving/role/RoleRouter";
import { ActorRouter } from "./infrastructure/express/driving/actor/ActorRouter";
import { RoleController } from "./infrastructure/express/driving/role/RoleController";
import { ActorController } from "./infrastructure/express/driving/actor/ActorController";
import { RoleUseCase } from "./application/usecases/role/RoleUseCase";
import { ActorUseCase } from "./application/usecases/actor/ActorUseCase";
import { RoleService } from "./infrastructure/services/role/RoleService";
import { ActorService } from "./infrastructure/services/actor/ActorService";
import { RoleRepository } from "./infrastructure/repositories/role/RoleRepository";
import { ActorRepository } from "./infrastructure/repositories/actor/ActorRepository";
import { AppDataSource } from "./infrastructure/database/config/typeorm";

(async () => {
  const httpServer = new ExpressServer();

  const roleRepository = new RoleRepository(AppDataSource);
  const roleService = new RoleService(roleRepository);
  const roleUseCase = new RoleUseCase(roleService);
  const roleController = new RoleController(roleUseCase);
  const roleRouter = new RoleRouter(roleController);

  const actorRepository = new ActorRepository(AppDataSource);
  const actorService = new ActorService(actorRepository);
  const actorUseCase = new ActorUseCase(actorService);
  const actorController = new ActorController(actorUseCase);
  const actorRouter = new ActorRouter(actorController);

  const routerManager = new RouterManager(httpServer, roleRouter, actorRouter);

  const app = new Application(httpServer, routerManager);
  await app.listen();
})();
