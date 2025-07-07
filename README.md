# Smart Resume Reviewer using Azure OpenAI

## 🧠 What It Does
- Takes your resume as input (PDF or text)
- Compares it with a job description
- Provides GenAI-powered suggestions for improvement using Azure OpenAI
- Summarizes your skills, flags missing keywords, and rephrases weak points

## 🔍 Why This Project Is Ideal
| Benefit                | Why it matters                                      |
|------------------------|-----------------------------------------------------|
| 💼 Career-Relevant     | Resume relevance shows direct personal ROI          |
| 🧠 Uses Core GenAI     | Prompting, text comparison, summarization           |
| 🔄 Full Stack          | Frontend, backend, OpenAI API, DB                   |
| ☁️ Azure Ready         | Azure OpenAI, Cosmos DB, App Service                |
| 📄 Impressive on Resume| Practical + shows AI knowledge and system design    |

## ⚙️ Tech Stack
| Layer      | Technology                                    |
|------------|-----------------------------------------------|
| Frontend   | React (Resume upload + results UI)            |
| Backend    | Python + FastAPI, pdfplumber                  |
| GenAI      | Azure OpenAI (GPT-4o)                         |
| Database   | Azure Cosmos DB (Store resumes + suggestions) |
| Hosting    | Azure App Service / Static Web Apps           |

## 🧪 Features (Step-by-Step)
- Upload Resume (PDF or Text)
- Paste Job Description
- Backend calls Azure OpenAI with a structured prompt:
- Returns:
  - Strenghts
  - Areas for Improvement
  - Suggestions to Improve the Resume
  - Final note


 ## 📦 Project Setup 
 - Client Side Set Up: refer Langchain/client/README.md
 - Server Side Set Up: refer Langchain/server2/setup.md

 ## ✅ Model Response
 - Refer Langchain/Resume Review Result.pdf
