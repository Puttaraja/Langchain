const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
require("dotenv").config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_KEY;
const deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT;

const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

exports.getOpenAIResponse = async (prompt) => {
  const response = await client.getCompletions(deploymentName, prompt, {
    maxTokens: 800,
    temperature: 0.7,
  });

  return response.choices[0].text.trim();
};
