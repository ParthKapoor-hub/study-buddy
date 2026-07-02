import React from "react";
import "./App.css";
export default function App() {
  return (
    <div className="container">
      <h1>Study Buddy 🚀</h1>
      <p>Your smart AI study assistant for notes, quizzes & exams</p>

      <div className="buttons">
        <button>Get Started</button>
        <button>Login</button>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="card">
          <h3>📚 Smart Notes</h3>
          <p>Generate quick and clean notes instantly</p>
        </div>

        <div className="card">
          <h3>🧠 AI Quiz</h3>
          <p>Test your knowledge with auto-generated quizzes</p>
        </div>

        <div className="card">
          <h3>⏱️ Study Timer</h3>
          <p>Pomodoro timer for focused study sessions</p>
        </div>
      </div>
    </div>
  );
}