import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">WizQuiz</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Do you have what it takes to become the most powerful Quizard?
        </p>
        <Link to="/quiz" className="btn btn-primary btn-lg">
          Start your Quizard journey
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
