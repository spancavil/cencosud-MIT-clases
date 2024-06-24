import { Sequelize } from "sequelize";

const database = "clase_11";
const user = "root";
const password = "passs";
const host = "localhost";

// Option 3: Passing parameters separately (other dialects)
export const db = new Sequelize(database, user, password, {
  host,
  dialect:
    "mysql" /*'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});
