import dotenv from "dotenv";
import UserSchema from "../Schema/UserSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

dotenv.config();
export const createUser = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const isValidEmail = (email) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    };
    if (!isValidEmail) {
      return res
        .status(400)
        .json({ error: "Invalid email and provide right email" });
    }
    const hashedPass = await bcrypt.hash(password , 10);
    const newUser = await UserSchema({
        username : username,
        email: email,
        password : hashedPass
    })
    await newUser.save();
    const payload = {
        _id : newUser._id,
    }
    const authToken = jwt.sign(payload , process.env.JWTSECERET);
    res.status(200).send({authToken, _id: newUser._id,res:"User created successfully" , success: true})

  } catch (error) {
    console.log("Intrenal server error at auth controller🔴 ", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
