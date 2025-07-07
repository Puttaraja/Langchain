const pdfParse = require("pdf-parse");
const { getOpenAIResponse } = require("../services/openaiService");

exports.handleReview = async (req, res) => {
  try {
    const resumeBuffer = req.file.buffer;
    const jobDescription = req.body.jobDescription;

    // 1. Extract text from PDF
    const resumeText = await pdfParse(resumeBuffer);
    const resumeContent = resumeText.text;

    // 2. Generate prompt
    const prompt = `
Compare the following resume and job description. Give:
1. Matched skills
2. Missing skills/keywords
3. Suggested improvements in resume wording

Resume:
${resumeContent}

Job Description:
${jobDescription}
`;

    // 3. Get response from OpenAI
    const result = await getOpenAIResponse(prompt);

    // 4. Return to frontend
    res.json({ message: result });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};
