import express, { Application } from "express";
import { Constant } from "./shared/constants/Constant";
import { appDataSource } from "./infrastructure/database/orm/config/typeorm";
import { RouterManager } from "./infrastructure/driving/RouterManager";

const application: Application = express();
const app: Application = application;

app.listen(Constant.PORT, async () => {
  try {
    await appDataSource.initialize();
    console.log("Data Source has been initialized!");
    console.log(`Server running at port http://localhost:${Constant.PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  const routerManager = new RouterManager(application);
  routerManager.manageRoutes();
});
