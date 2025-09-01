import express from "express";
import { items } from "./data.js";

const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");


// Allow all origins (dev mode)
app.use(cors());

app.get("/", (req, res) => {
  res.send("Shopping API is running...");
});

app.get("/shopping", (req, res) => {
  res.json(items);
});

export default app;
