import React, { useEffect, useState } from "react";
import Question from "../component/Question";
import FetchData from "../services/fetchData";

function Questions() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState({
    correctAnswers: 0,
    questions: [],
    myAnswer: [],
    correctAnswer: [],
  });

  useEffect(() => {
    let tempCategory = [];
    FetchData.getQuestions().then((res) => {
      res.data.forEach((el) => {
        if (!tempCategory.includes(el.category)) {
          tempCategory.push(el.category);
        }
      });
      setCategories(tempCategory);
      setData(res.data);
    });
  }, []);

  const getCategoryQuestions = (category) => {
    let tempQuestions = data.filter((el) => el.category === category);
    setCurrent(0);
    setQuestions(tempQuestions);
  };

  const nextQuestion = (answer, incrementCorrectAnswer) => {
    let copyScore = { ...score };
    copyScore.correctAnswers += incrementCorrectAnswer;
    copyScore.questions.push(questions[current].question);
    copyScore.myAnswer.push(answer);
    copyScore.questions.push(questions[current].correct_answers);
    setScore(copyScore);
    setCurrent(current + 1);
  };

  return (
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col-3 d-flex flex-column">
          {categories.map((cat, index) => (
            <button
              className="btn btn-info mb-2"
              key={index}
              onClick={() => {
                getCategoryQuestions(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="col-8 offset-1">
          {questions.length ? (
            <Question
              question={questions[current]}
              nextQuestion={nextQuestion}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Questions;
