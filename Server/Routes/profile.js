import express from "express";
import profiledata from "../Controller/profile.js"
import { getprofile } from "../Controller/profile.js";
const router = express.Router();

// Define the route for profile data submission
router.post("/profile", profiledata);
router.get("/getprofile",getprofile)

export default router;
