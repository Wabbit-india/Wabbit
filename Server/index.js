import express from "express";
import authRouter from "./Routes/auth.js";
import cors from "cors";
import dotenv from "dotenv";
import connectToDb from "./db/Db.js";

dotenv.config();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is undefined

try {
  const app = express();

  app.use(express.json());
  app.use(cors());

  await connectToDb();

  app.use("/auth", authRouter);

  app.get("/", (req, res) => {
    res.send("healthy");
  });

  app.listen(port, () => console.log(`Server started on port 🥸  ${port}`));
} catch (error) {
  console.log("⚠️ Error starting server: ", error.message);
}
