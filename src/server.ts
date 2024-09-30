import { Application } from "./infrastructure/express/Application";

(async () => {
  const app = new Application();
  await app.listen();
})();
