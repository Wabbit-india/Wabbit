import express from "express";
import { createUser, loginUser } from "../Controller/auth.js";

const router = express.Router();

try {
    router.post("/register", createUser);
    router.post("/login", loginUser);
} catch (error) {
    console.log("Intrenal server error at auth route 🔴 ", error);
}

export default router;