// backend/models/Question.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, default: "" },
    askedBy: { type: String, default: "Anonymous" },
  },
  {
    timestamps: true
  }
);
export default mongoose.model("Question", questionSchema);