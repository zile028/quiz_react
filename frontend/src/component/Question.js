import React, { useEffect, useState } from "react";
import Utils from "../services/Utils";

function Question({ question, nextQuestion }) {
  const style = {
    height: "600px",
    border: "2px solid red",
    borderRadius: "10px",
  };
  const [answer, setAnswer] = useState({
    option: "",
    isCorrect: 0,
  });
  const [optBtn, setOptBtn] = useState(
    Array(question.options.length).fill("btn btn-warning mx-1")
  );
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(Utils.randomize(question.options));
  }, [question.options]);

  const checkAnswered = (option, index) => {
    let optionsBtn = [...optBtn];
    if (option === question.correct_answer) {
      optionsBtn[index] = "btn btn-success mx-1";
      setAnswer({
        option: option,
        isCorrect: 1,
      });
    } else {
      optionsBtn[index] = "btn btn-danger mx-1";
      optionsBtn[options.indexOf(question.correct_answer)] =
        "btn btn-success mx-1";
      setAnswer({
        option: option,
        isCorrect: 0,
      });
    }
    setTimeout(() => {
      setOptBtn(Array(question.options.length).fill("btn btn-warning mx-1"));
      nextQuestion(answer);
    }, 2000);
    setOptBtn(optionsBtn);
  };

  return (
    <div className="text-center" style={style}>
      <h3>{question.question}</h3>
      {options.map((option, index) => {
        return (
          <button
            className={optBtn[index]}
            key={index}
            onClick={() => {
              checkAnswered(option, index);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Question;
