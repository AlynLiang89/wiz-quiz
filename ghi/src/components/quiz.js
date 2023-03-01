import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/questions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data.questions);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.id}</td>
              <td>{question.question}</td>
              <td>{question.answer}</td>
              <td>{question.option_1}</td>
              <td>{question.option_2}</td>
              <td>{question.option_3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Quiz;
