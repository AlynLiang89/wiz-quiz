import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

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

  const shuffleQuestions = (questions) => {
    return questions.sort(() => Math.random() - 0.5);
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (selectedOption) => {
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

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    fetchQuestions();
  };

  if (showResults) {
    return (
      <div>
        <h2>Results</h2>
        <p>
          You scored {score} out of {questions.length}.
        </p>
        <button onClick={restartQuiz}>Start Over</button>
      </div>
    );
  }

  if (questions.length > 0) {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div>
        <h2>Question {currentQuestionIndex + 1}</h2>
        <p>{currentQuestion.question}</p>
        {currentQuestion.options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
        <p>Score: {score}</p>
      </div>
    );
  }

  return (
    <div>
      <p>Loading questions...</p>
    </div>
  );
};

export default Quiz;
