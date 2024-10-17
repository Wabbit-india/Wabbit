import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    freelancer:{
      type: Boolean,
      default : false
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
