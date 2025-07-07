import React from "react";
import "./ResumeLoader.css";

const ResumeLoader = ({ fileName, description }) => {
  return (
    <div className="resume-loader-container">
      <h2 className="resume-loader-title">Resume Analysis</h2>
      <div className="resume-loader-info">
        <p>
          <strong>File Name:</strong> {fileName || "No file selected"}
        </p>
        <p>
          <strong>Description:</strong>
        </p>
        <div className="resume-loader-description">
          {description || "No description provided"}
        </div>
      </div>
      <button className="resume-loader-button" type="button" disabled>
        Analysing...
      </button>
    </div>
  );
};

export default ResumeLoader;