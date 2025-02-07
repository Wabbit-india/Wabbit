import express from "express";
import portfolio from "../Controller/portfolio.js"
const router = express.Router();

// Define the route for profile data submission
router.post("/portfolio", portfolio);

export default router;
