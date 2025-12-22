require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// serve frontend
app.use(express.static(path.join(__dirname, "frontend")));

// API routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/jobs", require("./routes/job.routes"));
app.use("/api/applications", require("./routes/application.routes"));

// default page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "login.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
