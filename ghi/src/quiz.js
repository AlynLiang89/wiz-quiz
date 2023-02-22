import React, { useState, useEffect } from "react";
import data from "./questions.json";
import "./style.css";

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledData, setShuffledData] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    console.log(data);
    if (timeLeft === 0) {
      handleAnswerClick(false);
    }
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeLeft(10);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(10);
    const shuffledQuestions = shuffle(data);
    const shuffledData = shuffledQuestions.slice(0, 10).map((question) => {
      const answers = question.incorrectAnswers.concat(question.correctAnswer);
      return {
        ...question,
        answers: shuffle(answers),
      };
    });
    setShuffledData(shuffledData);
  };

  const shuffle = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  if (shuffledData.length === 0) {
    restartQuiz();
  }

  const currentQuestion = shuffledData[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz</h1>
      {currentQuestion && (
        <div className="question-container">
          <p className="question">{currentQuestion.question}</p>
          <div className="timer">Time Left: {timeLeft} seconds</div>
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={index}
              className="answer-btn"
              onClick={() =>
                handleAnswerClick(answer === currentQuestion.correctAnswer)
              }
            >
              {answer}
            </button>
          ))}
        </div>
      )}
      {!currentQuestion && (
        <div className="quiz-summary">
          <p className="quiz-summary-text">Quiz completed!</p>
          <p className="quiz-summary-score">Your score: {score}/10</p>
          <button className="quiz-restart-btn" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};
