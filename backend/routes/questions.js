// backend/routes/questions.js
const express = require("express");
const Question = require("../models/Question");
const router = express.Router();

// GET all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

// POST a new question
router.post("/", async (req, res) => {
  try {
    const q = new Question({
      question: req.body.question,
      askedBy: req.user?.username || "Anonymous", // optional JWT
    });
    await q.save();
    res.json(q);
  } catch (err) {
    res.status(500).json({ error: "Failed to submit question" });
  }
});

// POST answer to a question (admin only)
router.post("/:id/answer", async (req, res) => {
  try {
    const q = await Question.findById(req.params.id);
    if (!q) return res.status(404).json({ error: "Question not found" });

    q.answer = req.body.answer;
    await q.save();

    res.json(q);
  } catch (err) {
    res.status(500).json({ error: "Failed to submit answer" });
  }
});

module.exports = router;
