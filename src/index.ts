import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import knex from "./db/knex";
import { Model } from "objection";
import todos from "./routes/todos";

//passing in knex configuration from knex.ts
Model.knex(knex);

const app = express();

const port = 9001;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is ready at http://localhost:${port}👾✨`);
});

app.get("/", (_, res) => {
  res.send("Hello World!");
});

//This is going to use the todos.ts file and all of the functions inside it.
app.use("/todos", todos);

export default app;
