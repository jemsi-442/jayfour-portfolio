// backend/models/Update.js
const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Update", updateSchema);
