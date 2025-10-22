// backend/models/Question.js
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, default: "" },
  askedBy: { type: String, default: "Anonymous" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Question", questionSchema);
