import React, { useRef } from "react";

function Question({ question, nextQuestion }) {
  const style = {
    height: "600px",
    border: "2px solid red",
    borderRadius: "10px",
  };

  const optionsBtn = [useRef(), useRef(), useRef(), useRef()];
  const styleBtn = [
    useRef("btn btn-warning mx-1"),
    useRef("btn btn-warning mx-1"),
    useRef("btn btn-warning mx-1"),
    useRef("btn btn-warning mx-1"),
  ];

  const checkAnswered = (option, index) => {
    console.log(styleBtn[0]);
    if (option === question.correct_answer) {
      optionsBtn[index].current.className = "btn btn-success mx-1";
      nextQuestion(option, 1);
    } else {
      nextQuestion(option, 0);
      optionsBtn[index].current.className = "btn btn-danger mx-1";
      optionsBtn[
        question.options.indexOf(question.correct_answer)
      ].current.className = "btn btn-success mx-1";
    }
  };

  return (
    <div className="text-center" style={style}>
      <h3>{question.question}</h3>
      {question.options.map((option, index) => {
        return (
          <button
            ref={optionsBtn[index]}
            className="btn btn-warning mx-1"
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
