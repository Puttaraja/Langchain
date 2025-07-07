const express = require("express");
const multer = require("multer");
const { handleReview } = require("../controllers/reviewController");

const router = express.Router();
const upload = multer();

router.post("/review", upload.single("resume"), handleReview);

module.exports = router;
