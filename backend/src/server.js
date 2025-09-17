import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const _dirname = path.resolve();
// Middleware to parse JSON     
app.use(express.json());

// Middleware to serve static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../frontend/dist")));
}


// Auth Routes
app.use("/api/auth", authRoutes);

app.use((req, res) => {
  res.sendFile(path.resolve(_dirname, "../frontend", "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});

export default app;
