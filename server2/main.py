from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber
from services.openai_service import analyze_resume
from database.cosmos_db_nosql_client import save_reviews, fetch_all_reviews

app = FastAPI()  # ✅ FastAPI app declared here

# CORS setup for frontend React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/review")
async def review_resume(resume: UploadFile, job_description: str = Form(...)):
    with pdfplumber.open(resume.file) as pdf:
        resume_text = "\n".join(
            page.extract_text() for page in pdf.pages if page.extract_text()
        )
    result = analyze_resume(resume_text, job_description)
    save_reviews(resume_text, job_description, result)
    return {"message": result}

@app.get("/api/reviews")
def get_reviews():
    return fetch_all_reviews

