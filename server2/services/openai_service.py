import os
from openai import AzureOpenAI
from dotenv import load_dotenv

load_dotenv()

client = AzureOpenAI(
    api_key=os.getenv("AZURE_OPENAI_KEY"),
    api_version=os.getenv("AZURE_OPENAI_VERSION"),
    azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT")
)

deployment_name = os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME")

def analyze_resume(resume_text: str, job_description: str) -> str:
    messages = [
        {
            "role": "system",
            "content": "You are a resume reviewer that compares resumes with job descriptions and gives helpful feedback.",
        },
        {
            "role": "user",
            "content": resume_text,
        },
        {
            "role": "user",
            "content": job_description,
        },
        {
            "role": "assistant",
            "content": "Please analyze the resume against the job description and provide feedback on how well the resume matches the job requirements, including strengths and areas for improvement.",
        }
    ]

    response = client.chat.completions.create(
        model=deployment_name,
        messages=messages,
        temperature=0.7,
        max_tokens=800
    )

    return response.choices[0].message.content
