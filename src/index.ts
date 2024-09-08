import express, { Application } from "express";
import { Constant } from "./shared/constants/Constant";
import { appDataSource } from "./infrastructure/database/orm/config/typeorm";
import { RouterManager } from "./infrastructure/driving/RouterManager";
import { RoleRepository } from "./infrastructure/repositories/RoleRepository";
import { RoleService } from "./infrastructure/services/RoleService";
import { RoleUseCase } from "./application/usecases/RoleUseCase";
import { RoleController } from "./infrastructure/driving/role/RoleController";
import { RoleRouter } from "./infrastructure/driving/role/RoleRouter";
import { Message } from "./shared/messages/Message";
import { ErrorHandler } from "./infrastructure/middleware/ErrorHandler";

const app: Application = express();
app.use(express.json());

const roleRepository = new RoleRepository(appDataSource);
const roleService = new RoleService(roleRepository);
const roleUseCase = new RoleUseCase(roleService);
const roleController = new RoleController(roleUseCase);
const roleRouter = new RoleRouter(roleController);

const routerManager = new RouterManager(app, roleRouter);
routerManager.manageRoutes();

app.use(ErrorHandler.handle);

app.listen(Constant.PORT, async () => {
  try {
    await appDataSource.initialize();
  } catch (error) {
    console.error(Message.DATA_SOURCE_ERROR, error);
    process.exit(1);
  }
});
