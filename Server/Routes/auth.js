import express from "express";
import { createUser } from "../Controller/auth.js";

const router = express.Router();

try {
    router.post("/register", createUser)
} catch (error) {
    console.log("Intrenal server error at auth route 🔴 ", error);
}

export default router;