// backend/routes/questions.js
import express from "express";
import Question from "../models/Question.js";

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
      askedBy: req.user?.username || "Anonymous",
    });

    await q.save();
    res.json(q);
  } catch (err) {
    res.status(500).json({ error: "Failed to submit question" });
  }
});

// POST answer to a question
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

export default router;
