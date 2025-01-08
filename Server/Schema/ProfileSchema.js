import mongoose from 'mongoose';
import { Schema } from "mongoose";
import User from "./UserSchema.js"; 

const ProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
        firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    description: { type: Array, required: true },
    region:{type:String,required:true},
    city:{type:String,required:true},
    // prfilePicture:[String],
    languages: [{
      language: { type: String, required: true },
      proficiency: { type: String, required: true }
    }],
    occuption: { type: String },
    fromdate: { type: String },
    todate: { type: String },
    skillschoose: [String],
    skillswork:[String],
    portfoliolinks: { type: String },
    university: { type: String },
    },
);

export default mongoose.model("Profile", ProfileSchema);
