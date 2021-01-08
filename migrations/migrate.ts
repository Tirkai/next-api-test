import { open } from "sqlite";
import sqlite3 from "sqlite3";
const migrate = async () => {
  const db = await open({
    filename: "./db/cert.sqlite",
    driver: sqlite3.Database,
  });

  const migration = await db.migrate({
    migrationsPath: "./migrations",
  });

  console.log(JSON.stringify(migration));
};

migrate();

export default {};
