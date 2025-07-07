import React from "react";

const ResumeAnalyzer = ({ output }) => {
  return (
    <div style={{ padding: "2rem", whiteSpace: "pre-wrap" }}>
      <h2>📋 Resume Review Result</h2>
      <p>{output || "No result available."}</p>
    </div>
  );
};

export default ResumeAnalyzer;
