import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

const test = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = await open({
    filename: "./db/cert.sqlite",
    driver: sqlite3.Database,
  });

  const data = await db.all(`SELECT * FROM Cert`);
  // const db = new sqlite3.Database("./db/cert.sqlite");
  db.exec(``);

  console.log(JSON.stringify(db));

  response.status(200).json(data);
};

export default test;
