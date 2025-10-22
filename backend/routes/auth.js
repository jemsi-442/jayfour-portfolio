import express from "express";
import { signup, login } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Protected (Admin Only)
router.get("/admin-only", authMiddleware, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }

  res.json({
    message: "Welcome Admin",
    user: req.user
  });
});

export default router;
