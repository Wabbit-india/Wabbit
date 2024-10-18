import dotenv from "dotenv";
import UserSchema from "../Schema/UserSchema.js";
import bcrypt from "bcrypt";
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
    const hashedPass = await bcrypt.hash(password, 10);
    const alreadyUser = await UserSchema.findOne({ email: email });
    const alreadyUsername = await UserSchema.findOne({ username: username });
    if (alreadyUser) {
      return res.status(400).json({ error: "Email is already available" });
    }
    if (alreadyUsername) {
      return res.status(400).json({ error: "Username is already available" });
    }
    const newUser = await UserSchema({
      username: username,
      email: email,
      password: hashedPass,
    });
    await newUser.save();
    const payload = {
      _id: newUser._id,
    };
    const authToken = jwt.sign(payload, process.env.JWTSECERET);
    res.status(200).send({
      authToken,
      _id: newUser._id,
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    console.log("Intrenal server error at register auth controller🔴 ", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { data, password } = req.body;
    if (!data || !password) {
      return res.status(400).json({
        error: "Please provide either email or username along with a password.",
      });
    }
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data);
    const user = await UserSchema.findOne(isEmail? {email: data} : {username: data});
    if (!user) {
      return res.status(400).json({ error: "Invalid email/username or password." });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Invalid email/username or password." });
    }
    const payload = { _id: user._id };
    const authToken = jwt.sign(payload, process.env.JWTSECERET);

    return res.status(200).json({_id: user._id , authToken , message: "User login successfully" , success: true})
  } catch (error) {
    console.log("Intrenal server error at login auth controller🔴 ", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
