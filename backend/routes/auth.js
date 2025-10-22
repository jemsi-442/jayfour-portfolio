const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

// Signup (admin only can create admin)
router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const user = new User({ name, email, password, role });
    await user.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, "SECRET_KEY", { expiresIn: "1d" });
    res.json({ user: { name: user.name, email: user.email, role: user.role }, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Protected test route
router.get("/admin-only", authMiddleware, (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Forbidden" });
  res.json({ message: "Welcome Admin" });
});

module.exports = router;
