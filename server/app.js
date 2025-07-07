const express = require("express");
const cors = require("cors");
const reviewRoutes = require("./routes/review");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", reviewRoutes);

module.exports = app;
