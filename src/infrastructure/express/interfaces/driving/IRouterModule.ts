import { Router } from "express";

export interface IRouterModule {
  initRoutes(): void;
  getRouter(): Router;
}
