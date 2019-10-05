import React, { useState } from "react";
interface Props {
  question: any;
  setQuestions: any;
}

function handleOnChange(e: any, setAnswer: any) {
  setAnswer(e.target.value);
}

function handleButtonClick(answerState: any, question: any, setQuestions: any) {
  console.log(answerState, question);

  if (question.answer === answerState) {
    console.log(question);
    setQuestions((prevState: any) => (prevState[0].completed = false));
  } else {
    console.log("wrong!");
  }
}

const Type: React.FC<Props> = ({ question, setQuestions }) => {
  const [answer, setAnswer] = useState("");
  return (
    <div>
      <h1>{question.question}</h1>
      Answer:{" "}
      <input
        value={answer}
        onChange={e => handleOnChange(e, setAnswer)}
      ></input>
      <button onClick={e => handleButtonClick(answer, question, setQuestions)}>
        submit
      </button>
    </div>
  );
};

export default Type;
