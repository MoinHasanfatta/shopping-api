import express from "express";
import cors from "cors";
import { items } from "./data.js";

const app = express();

// Middleware
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Shopping API is running...");
});

app.get("/shopping", (req, res) => {
  res.json(items);
});

// Export for Vercel
export default app;
