import { Request, Response } from "express";
import connecteDB from "./database";
import userRoutes from "./routes/userRoutes";

const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

connecteDB();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Bienvenue sur api-todo" });
});
//user routes
app.use("/user", userRoutes);

app.listen(port, hostname, () => {
  console.log(`Server ecoute sur http://localhost:${port}`);
});
