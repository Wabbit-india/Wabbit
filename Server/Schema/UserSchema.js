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
      enum: ["Buying", "Selling"],
      default: "",
    },
    freelancingPurpose: {
      type: [String],
      enum: ["Primary job", "A side project", "Personal use", ""],
      default: "",
    },
    companySize: {
      type: String,
      enum: ["Just me", "2-10", "11-50", "51-500", "500+", ""],
    },
    purpose: {
      type: String,
      enum: ["To start a project", "A specific project", "Just exploring", ""],
      default: "",
    },
    sellingPurpose: {
      type: String,
      enum: [
        "A side hustle",
        "Solo freelancer",
        "Agency Employee",
        "Agency owner",
        "",
      ],
      default: "",
    },
    experienceMode: {
      type: String,
      enum: [
        "Getting started",
        "Freelancing online",
        "Freelancing offline",
        "online and offline",
        "",
      ],
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
