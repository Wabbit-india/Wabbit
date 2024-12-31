import express from "express";
import authRouter from "./Routes/auth.js"
import profileRouter from "./Routes/profile.js"
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

  app.use("/auth" , authRouter);
  app.use("/api", profileRouter)

  app.get("/", (req, res) => {
    res.send("healthy");
  });

  app.listen(port, () => console.log("Server started🥸" ,{port}));
    
} catch (error) {
  console.log(error);
}
