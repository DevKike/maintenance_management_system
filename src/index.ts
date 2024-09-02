import express from "express";
import { Constant } from "./shared/constants/Constant";

const app = express();

app.listen(Constant.PORT, () => {
  try {
    console.log(`Server running at port ${Constant.PORT}`);
  } catch (error) {
    console.error(error);
  }
});
