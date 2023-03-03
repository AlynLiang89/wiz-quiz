import React from "react";
import "./App.css";
import Quiz from "./components/quiz";
import "./components/style.css";
// import Nav from "./Nav";
import leaderBoard from "./components/leaderboard";

function App() {
  return (
    <div className="App">
      <leaderBoard></leaderBoard>
      {/* <Nav></Nav> */}
      <Quiz></Quiz>
    </div>
  );
}

export default App;
