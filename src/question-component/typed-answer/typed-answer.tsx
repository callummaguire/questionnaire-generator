import React, { useState } from "react";
interface Props {
  question: any;
  setQuestions: any;
}

function handleOnChange(e: any, setAnswer: any) {
  setAnswer(e.target.value);
}

function handleButtonClick(answerState: any, question: any, setQuestions: any) {
  console.log("handle buton click", answerState, question);

  if (question.answer === answerState) {
    console.log(question);
    setQuestions((prevState: any) => {
      prevState[0].completed = true;
      return [...prevState];
    });
  } else {
    console.log("wrong!");
  }
}

const TypeAnswer: React.FC<Props> = ({ question, setQuestions }) => {
  const [answer, setAnswer] = useState("o notation");
  return (
    <div className="margin-container">
      <div className="question">
        <h1>{question.question}</h1>
        <div className="answer">
          <input
            value={answer}
            onChange={e => handleOnChange(e, setAnswer)}
          ></input>
          <button
            className="btn-primary"
            onClick={e => handleButtonClick(answer, question, setQuestions)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypeAnswer;
