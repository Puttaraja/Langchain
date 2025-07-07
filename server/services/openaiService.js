// server/services/openaiService.js
const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getChatCompletion = async (resume, jobDescription) => {
  const messages = [
    {
      role: "system",
      content: "You are a resume reviewer that compares resumes with job descriptions and gives helpful feedback.",
    },
    {
      role: "user",
      content: `Resume:\n${resume}\n\nJob Description:\n${jobDescription}`,
    },
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or gpt-4 if you have access
      messages,
      temperature: 0.7,
      max_tokens: 800,
    });

    return completion.choices[0].message.content;
  } catch (err) {
    console.error("OpenAI Error:", err.message);
    throw new Error("Failed to get response from OpenAI.");
  }
};
