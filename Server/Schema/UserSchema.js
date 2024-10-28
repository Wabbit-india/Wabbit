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
    freelancerType: {
      type: String,
      enum: ["buying", "selling"],
    },
    freelancingPurpose: {
      type: [String],
      enum: ["primary job", "side project", "personal use"],
    },
    companySize: {
      type: String,
      enum: ["Just me", "2-10", "11-50", "51-500", "500+"],
    },
    purpose: {
      type: String,
      enum: ["To start a project", "A specific project", "Just exploring"],
    },
    sellingPurpose: {
      type: String,
      enum: ["A side hustle", "Solo freelancer", "Agency Employee", "Agency owner"],
    },
    experienceMode: {
      type: String,
      enum: ["I'm just getting started", "Freelancing online", "Freelancing offline", "Both online and offline"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
