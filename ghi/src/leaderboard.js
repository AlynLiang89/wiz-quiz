import React from "react";

function Leaderboard({ users }) {
  const sortedUsers = [...users].sort((a, b) => b.score - a.score);

  return (
    <div className="Leaderboard">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Profile Picture</th>
            <th scope="col">Username</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user.username}>
              <td>{user.rank}</td>
              <td>
                <img
                  src={user.avatar_img}
                  alt={`${user.username}'s profile picture`}
                />
              </td>
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
