import mongoose from "mongoose";
import { Schema } from "mongoose";
import User from "./UserSchema.js"; 

const FreelancerSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    freelancerImgUrl: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    languages: [{
      type: String,
    }],
    skills: [{
      type: String,
    }],
    portfolioLinks: [{
      type: String,
    }],
    mobileNumber: {
      type: String,
      required: true,
    },
    categories: {
      canvaExpert: {
        type: Boolean,
        default: false,
      },
      videoEditor: {
        type: Boolean,
        default: false,
      },
    },
    experienceYears: {
      type: Number,
      default: 0,
    },
    hourlyRate: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Freelancer", FreelancerSchema);
