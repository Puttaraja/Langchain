import React, { useState } from "react";
import "./ResumeForm.css";

const ResumeForm = ({ onSubmit }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile || !jobDescription) {
      alert("Please upload a resume and enter a job description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("job_description", jobDescription);
    onSubmit(formData);
  };

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
