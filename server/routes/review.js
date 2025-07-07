const express = require("express");
const router = express.Router();
const multer = require("multer");
const reviewController = require("../controllers/reviewController");

// File upload config
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/review", upload.single("resume"), reviewController.handleReview);

module.exports = router;
