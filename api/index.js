import express from "express";
import cors from "cors";
import { items } from "../data.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Shopping API is running...");
});

app.get("/shopping", (req, res) => {
  res.json(items);
});

export default app;
