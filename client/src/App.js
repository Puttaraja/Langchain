import React, { useState } from "react";
import ResumeForm from "./components/Resume/ResumeForm";

function App() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/api/review", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Check console.");
    }
  };

  return (
    <div>
      <ResumeForm onSubmit={handleSubmit} />

      {result && (
        <div style={{ whiteSpace: "pre-wrap", padding: "1rem" }}>
          <h3>Review Result:</h3>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
