import React from "react";

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">WizQuiz</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Do you have what it takes to become the most powerful Quizard?
        </p>
        <button onClick={() => (window.location.href = "/quiz")}>
          Start Your Quizard Journey
        </button>
        <button onClick={() => (window.location.href = "/leaderboard")}>
          Leaderboard
        </button>
      </div>
    </div>
  );
}

export default MainPage;
