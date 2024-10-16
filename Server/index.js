import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import connentTOdb from "./db/Db.js";


dotenv.config();
const port = process.env.PORT;

try {
  const app = express();

  app.use(express.json());
  app.use(cors());
  await connentTOdb();

  app.get("/", (req, res) => {
    res.send("healthy");
  });

  app.listen(port, () => console.log("Server started🥸" ,{port}));
    
} catch (error) {
  console.log(error);
}
