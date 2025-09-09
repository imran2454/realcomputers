import express from "express";
import { registerAdmin, loginAdmin, getProfile } from "../controllers/adminController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Register (one-time for first admin)
router.post("/register", registerAdmin);

// Login
router.post("/login", loginAdmin);

// Protected route
router.get("/profile", authMiddleware, getProfile);

// Dashboard status


export default router;
