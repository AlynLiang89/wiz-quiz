import React, { useState, useEffect } from "react";
import "./leaderboard.css";

function Leaderboard() {
  const [leaderboards, setLeaderboards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/leaderboards/")
      .then((res) => res.json())
      .then((data) => setLeaderboards(data.leader_boards))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th className="leaderboard-rank">Rank</th>
            <th className="leaderboard-username">Username</th>
            <th className="leaderboard-score">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboards.map((leaderboard, index) => (
            <tr key={leaderboard.id}>
              <td key={`rank-${index}`}>{index + 1}</td>
              <td key={`username-${index}`}>{leaderboard.username}</td>
              <td key={`score-${index}`}>{leaderboard.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="leaderboard-btn"
        onClick={() => (window.location.href = "/")}
        key="main-page-btn"
      >
        Main Page
      </button>
      <button
        className="leaderboard-btn"
        onClick={() => (window.location.href = "/quiz")}
        key="take-quiz-btn"
      >
        Take Quiz
      </button>
    </div>
  );
}

export default Leaderboard;
