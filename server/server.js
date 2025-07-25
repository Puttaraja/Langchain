const express = require("express");
const cors = require("cors");
const { getChatCompletion } = require("./services/openaiService");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
