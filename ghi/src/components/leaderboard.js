import React from "react";

export default function leaderBoard() {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className="leaderboard">
      <h1 className="leaderboard">Leaderboard</h1>

      <div className="duration">
        <button onClick={handleClick} data-id="7">
          7 Days
        </button>
        <button onClick={handleClick} data-id="30">
          30 Days
        </button>
        <button onClick={handleClick} data-id="0">
          All-Time
        </button>
      </div>
    </div>
  );
}
