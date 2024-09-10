import { DataSource } from "typeorm";
import { Constant } from "../../../../shared/constants/Constant";
import { join } from "path";

export const appDataSource = new DataSource({
  type: Constant.DB_TYPE as any,
  host: Constant.DB_HOST,
  port: Constant.DB_PORT as any,
  username: Constant.DB_USERNAME,
  password: Constant.DB_PASSWORD,
  database: Constant.DB_NAME,
  entities: [join(__dirname, "../../entities/**/*.ts")],
  migrations: [join(__dirname, "../migrations/**/*.ts")],
  migrationsTableName: "migration_table",
  synchronize: false,
});
