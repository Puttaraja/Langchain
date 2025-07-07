import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumeForm from "./components/ResumeForm/ResumeForm";
import ResumeAnalyzer from "./components/ResumeAnalyzer/ResumeAnalyzer";

function App() {
  const [output, setOutput] = useState("");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeForm setOutput={setOutput} />} />
        <Route path="/review" element={<ResumeAnalyzer output={output.message} />} />
      </Routes>
    </Router>
  );
}

export default App;

