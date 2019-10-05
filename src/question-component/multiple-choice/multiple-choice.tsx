import React, { useState } from "react";

interface Props {
  question: string;
  questionAnswer: string;
}

function handleOnChange(e: any, setAnswer: any) {
  setAnswer(e.target.value);
}

function handleButtonClick(questionAnswer: any, answer: any) {
  console.log(answer + "something ,", questionAnswer);
  if (answer === questionAnswer) {
    console.log("correct!");
  } else {
    console.log("wrong!");
  }
}

const Type: React.FC<Props> = ({ question, questionAnswer }) => {
  const [answer, setAnswer] = useState("");
  return (
    <div>
      <h1>{question}</h1>
      Answer:{" "}
      <input
        value={answer}
        onChange={e => handleOnChange(e, setAnswer)}
      ></input>
      <button onClick={e => handleButtonClick(answer, questionAnswer)}>
        {" "}
        Submit
      </button>
    </div>
  );
};

export default Type;
