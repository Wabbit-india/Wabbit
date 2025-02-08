import mongoose from "mongoose";
import { Schema } from "mongoose";

const PortfolioSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    projectCategorise: {
      type: [String], 
      required: true,
    },
    portfolio: {
      type: String,
    },
  },
  { timestamps: true } 
);

export default mongoose.model("Portfolio", PortfolioSchema);
