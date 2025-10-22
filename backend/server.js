import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import logger from "./utils/logger.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

connectDB();

app.use("/api/auth", authRoutes);

app.get("/api/hello", (req, res) => res.json({ msg: "Hello from API" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
