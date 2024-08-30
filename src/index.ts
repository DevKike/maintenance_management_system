import express from "express";
import { config } from "dotenv";
config();

const app = express();
const PORT = process?.env?.PORT || 3001;

app.listen(PORT, () => {
  try {
    console.log(`Server running at port ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
