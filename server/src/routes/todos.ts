// CRUD operations

import express from "express";
import { Todo } from "../db/models/Todo";

const router = express.Router();

//this route is going to index all of the todos

//Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.query().select().orderBy("created_at");

  res.send({ todos });
});

//Get one todo
router.get("/:id", async (req, res) => {
  //grabbing the id from the req object
  const id = req.params.id;
  //accessing the todo. .first() is only going to give us the first record inside of the array
  const todo = await Todo.query().findById(id).first();

  res.send({ todo });
});

//Create new todo
router.post("/", async (req, res) => {
  const todo = req.body.todo;

  const newTodo = await Todo.query()
    .insert({ title: todo.title })
    .returning("*");

  res.send({ todo: newTodo });
});

//Update new todo
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const todo = req.body.todo;
  const updatedTodo = await Todo.query()
    .update({ title: todo.title, done: todo.done })
    .where({ id })
    .returning("*")
    .first();

  res.send({ todo: updatedTodo });
});

//Delete todo
router.delete("/:id", async (req, res) => {
  const todo = req.body.todo;

  const id = req.params.id;
  await Todo.query().deleteById(id);
  res.send("Todo was sucessfully deleted.");
});

export default router;
