import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const navigate = useNavigate();

  const timerRef = useRef(null);

  useEffect(() => {
    const fetchQuestions = () => {
      fetch("http://localhost:8000/api/questions")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const shuffledQuestions = shuffleQuestions(data.questions)
            .slice(0, 10)
            .map((question) => {
              const shuffledOptions = shuffleArray([
                question.option_1,
                question.option_2,
                question.option_3,
                question.answer,
              ]);
              return { ...question, options: shuffledOptions };
            });
          setQuestions(shuffledQuestions);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    setSecondsLeft(10);
    timerRef.current = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (secondsLeft === 0) {
      const handleAnswer = (selectedOption) => {
        clearInterval(timerRef.current);

        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
          setScore(score + 1);
        }

        if (currentQuestionIndex === questions.length - 1) {
          setShowResults(true);
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      };
      handleAnswer();
      // handleAnswer("");
    }
  }, [secondsLeft, currentQuestionIndex, score, questions]);

  const shuffleQuestions = (questions) => {
    return questions.sort(() => Math.random() - 0.5);
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (selectedOption) => {
    clearInterval(timerRef.current);

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleLeaderboardClick = () => {
    navigate("/leaderboard");
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    const fetchQuestions = () => {
      fetch("http://localhost:8000/api/questions")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const shuffledQuestions = shuffleQuestions(data.questions)
            .slice(0, 10)
            .map((question) => {
              const shuffledOptions = shuffleArray([
                question.option_1,
                question.option_2,
                question.option_3,
                question.answer,
              ]);
              return { ...question, options: shuffledOptions };
            });
          setQuestions(shuffledQuestions);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    };
    fetchQuestions();
  };

  if (showResults) {
    return (
      <div>
        <h2 className="results-title">Results</h2>
        <p className="results-score">
          You scored {score} out of {questions.length}.
        </p>
        <button className="restart-button" onClick={restartQuiz}>
          New Quiz
        </button>
        <button className="go-home" onClick={handleHomeClick}>
          Go back Home
        </button>
        <button className="see-leaderboard" onClick={handleLeaderboardClick}>
          View Leader Board
        </button>
      </div>
    );
  }

  if (questions.length > 0) {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div>
        <h2 className="question-title">Question {currentQuestionIndex + 1}</h2>
        <p className="question-text">{currentQuestion.question}</p>
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            className="answer-button"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
        <p className="time-left">Time Left: {secondsLeft}s</p>
        <p className="score-result">Score: {score}</p>
      </div>
    );
  }
};

export default Quiz;
