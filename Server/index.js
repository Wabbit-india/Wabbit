import express from "express";
// import connentTOdb from "./config/config.js";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const port = process.env.REACT_APP_SERVER_PORT;

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
