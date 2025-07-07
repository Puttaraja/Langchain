const pdfParse = require("pdf-parse");
const { getChatCompletion } = require("../services/openaiService");

exports.handleReview = async (req, res) => {
  try {
    const resumeBuffer = req.file.buffer;
    const jobDescription = req.body.jobDescription;

    // 1. Extract text from PDF
    const resumeText = await pdfParse(resumeBuffer);
    const resumeContent = resumeText.text;

    // 2. Get AI result
    const result = await getChatCompletion(resumeContent, jobDescription);

    // 3. Send back to frontend
    res.json({ message: result });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};
