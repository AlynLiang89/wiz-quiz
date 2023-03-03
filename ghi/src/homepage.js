import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

function HomePage() {
  function handleLoginClick() {
    window.location.href = "/login";
  }

  function handleSignupClick() {
    window.location.href = "/signup";
  }

  function handleQuizClick() {
    window.location.href = "/quiz";
  }

  return (
    <div className="header">
      <div className="logo">
        <img src="https://i.imgur.com/89pNxOm.png" alt="wizard" />
      </div>
      <div className="buttons">
        <Link to="/login">
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="signup-button" onClick={handleSignupClick}>
            Sign Up
          </button>
        </Link>
        <Link to="/quiz">
          <button className="quiz-button" onClick={handleQuizClick}>
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
