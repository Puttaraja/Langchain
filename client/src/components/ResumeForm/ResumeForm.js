import React, { useState } from "react";
import "./ResumeForm.css";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import analyzingAnimation from "../../assets/loadingIcon.json"; // adjust path as needed

const ResumeForm = ({ setOutput }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile || !jobDescription) {
      alert("Please upload a resume and enter a job description.");
      return;
    }

    setIsAnalyzing(true);

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("job_description", jobDescription);

    try {
      const response = await fetch("https://langchain-121j.onrender.com/api/review", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setOutput(data);
      navigate("/review");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Check console.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (isAnalyzing) {
    return (
      <div className="resume-loader-container">
        <h2 className="form-title">Analyzing your resume...</h2>
        <Lottie animationData={analyzingAnimation} style={{ height: 220 }} />
        <div className="resume-loaded-msg">
          {resumeFile && <>✅ Resume loaded: <strong>{resumeFile.name}</strong></>}
        </div>
        <div className="resume-loader-description">
          {jobDescription}
        </div>
        
      </div>
    );
  }

  return (
    <div className="resume-container">
      <form className="resume-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Smart Resume Reviewer</h2>

        <label className="form-label">Upload Resume (PDF)</label>
        <input
          className="form-input"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          required
        />

        {resumeFile && (
          <div className="resume-loaded-msg">
            ✅ Resume loaded: <strong>{resumeFile.name}</strong>
          </div>
        )}

        <label className="form-label">Paste Job Description</label>
        <textarea
          className="form-textarea"
          rows="6"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
          required
        />

        <button className="form-button" type="submit">
          Analyze
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;