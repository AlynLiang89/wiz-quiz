import React, { useState, useEffect } from "react";

function Leaderboard() {
  const [leaderboards, setLeaderboards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/leaderboards/")
      .then((res) => res.json())
      .then((data) => setLeaderboards(data.leader_boards))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboards.map((leaderboard, index) => (
            <tr key={leaderboard.id}>
              <td>{index + 1}</td>
              <td>{leaderboard.username}</td>
              <td>{leaderboard.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Leaderboard;
