// backend/models/Update.js
import mongoose from "mongoose";

const updateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Update", updateSchema);
