import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./ResumeAnalyzer.css";

const ResumeAnalyzer = ({ output }) => {
  return (
    <div className="analyzer-container">
      <h2 className="analyzer-title">📋 Resume Review Result</h2>

      <div className="analyzer-box">
        {output ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{output}</ReactMarkdown>
        ) : (
          <p>No result available.</p>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
