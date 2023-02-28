import React from "react";

function Leaderboard({ users }) {
  // right here is where we sort the users by score in descending order
  const sortedUsers = users.sort((a, b) => b.score - a.score);

  return (
    <div className="Leaderboard">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>rank</th>
            <th>Profile Pic</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user.username}>
              <td>{user.rank}</td>
              <td>{user.avatar_img}</td>
              <td>{user.username}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
