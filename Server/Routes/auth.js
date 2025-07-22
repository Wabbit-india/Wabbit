import express from "express";
import { createUser, loginUser, setinfo, checkUsername } from "../Controller/auth.js";

const router = express.Router();

// Define routes correctly
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/setinfo", setinfo);
router.get("/check-username/:username", checkUsername); // Fixed username check route

export default router;
