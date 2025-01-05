import mongoose from "mongoose";
const connectToDb = async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in the .env file");
    }
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to database 🤠🫡");
  } catch (error) {
    console.log(
      "⚠️ Error occurred while connecting to the database: ",
      error.message
    );
  }
};
export default connectToDb;
