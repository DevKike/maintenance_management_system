import express, { Application } from "express";
import { IHttpServer } from "../interfaces/http/IHttpServer";

export class ExpressServer implements IHttpServer {
  private app: Application;

  constructor() {
    this.app = express();
  }

  async listen(port: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.app.listen(port, () => {
        resolve();
      });
    });
  }

  use(middleware: any): void {
    this.app.use(middleware);
  }

  route(path: string, router: any): void {
    this.app.use(path, router);
  }

  getExpressApp(): Application {
    return this.app;
  }

  setMiddleware(middleware: any): void {
    this.app.use(middleware);
  }
}
