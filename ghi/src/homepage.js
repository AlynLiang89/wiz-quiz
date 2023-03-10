import React from "react";
import { Link } from "react-router-dom";
import { useToken } from "./auth";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { token, logout } = useToken();
  const navigate = useNavigate();

  function handleQuizClick() {
    if (token) {
      navigate("/quiz");
    } else {
      window.alert("You need to be logged in to take the quiz.");
    }
  }

  function handleupdateClick() {
    navigate("/update");
  }

  function handleboardClick() {
    navigate("/leaderboard");
  }

  return (
    <div className="header">
      <div className="logo">
        <img src="https://i.imgur.com/gzLv9C9.png" alt="wizard" />
      </div>
      <div className="buttons">
        {token ? (
          <>
            <button className="update-button" onClick={handleupdateClick}>
              Update account
            </button>
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup-button">Sign Up</button>
            </Link>
          </>
        )}
        <button className="quiz-button" onClick={handleQuizClick}>
          Start Quiz
        </button>
        <button className="view-leaderboard" onClick={handleboardClick}>
          View Leaderboard
        </button>
      </div>
    </div>
  );
}

export default HomePage;
