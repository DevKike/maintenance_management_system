import express from "express";
import { Constant } from "./shared/constants/Constant";
import { AppDataSource } from "./infrastructure/database/orm/config/typeorm.config";

const app = express();

app.listen(Constant.PORT, () => {
  try {
    AppDataSource.initialize();

    console.log("Data Source has been initialized!");
    console.log(`Server running at port ${Constant.PORT}`);
  } catch (error) {
    console.error(error);
  }
});
