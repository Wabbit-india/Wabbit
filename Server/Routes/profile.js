import express from "express";
import profiledata from "../Controller/profile.js"
const router = express.Router();

// Define the route for profile data submission
router.post("/profile", profiledata);

export default router;
