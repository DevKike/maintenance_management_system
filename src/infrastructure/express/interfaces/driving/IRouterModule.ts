import { IHttpRouter } from "../http/IHttpRouter";

export interface IRouterModule {
  initRoutes(): void;
  getRouter(): IHttpRouter;
}
