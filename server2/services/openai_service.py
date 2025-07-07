import os
from openai import AzureOpenAI
from dotenv import load_dotenv

load_dotenv()

client = AzureOpenAI(
    api_key=os.getenv("AZURE_OPENAI_KEY"),
    api_version=os.getenv("AZURE_OPENAI_VERSION"),  # e.g., "2023-07-01-preview"
    azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT")
)

deployment_name = os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME")


def analyze_resume(resume_text: str, job_description: str) -> str:
    messages = [
        {
            "role": "system",
            "content": (
                "You are a resume reviewer that compares resumes with job descriptions "
                "and provides clear, structured feedback in markdown format. "
                "Use headings (###), bullet points, and emojis where appropriate."
            )
        },
        {
            "role": "user",
            "content": (
                f"📄 **Resume:**\n{resume_text}\n\n"
                f"📝 **Job Description:**\n{job_description}\n\n"
                "Please compare the two and provide:\n"
                "- ✅ Strengths\n"
                "- ⚠️ Areas for improvement\n"
                "- 💡 Suggestions to improve the resume"
            )
        }
    ]

    response = client.chat.completions.create(
        model=deployment_name,
        messages=messages,
        temperature=0.7,
        max_tokens=2048,  # 🔼 Increased token limit
    )

    return response.choices[0].message.content
