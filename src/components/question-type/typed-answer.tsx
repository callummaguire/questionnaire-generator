import React, { useState } from "react";
import { useResultValue } from "../../context/results";

interface Props {
  question: any;
  setQuestions: any;
}

function handleOnChange(e: any, setAnswer: any) {
  setAnswer(e.target.value);
}

function handleButtonClick(
  answerState: any,
  question: any,
  setQuestions: any,
  setResult: any
) {
  setCompletedQuestion(setQuestions, question);
  if (question.answer === answerState) {
    correctAnswer(setResult);
  } else {
    iscorrectAnswer(setResult);
  }
}

function correctAnswer(setResult: any) {
  setResult((preResultState: any) => {
    preResultState.answerCorrectQuestion =
      preResultState.answerCorrectQuestion + 1;
    return { ...preResultState };
  });
}
function iscorrectAnswer(setResult: any) {
  setResult((preResultState: any) => {
    preResultState.answerIncorrectQuestion =
      preResultState.answerIncorrectQuestion + 1;

    return { ...preResultState };
  });
}

function setCompletedQuestion(setQuestions: any, question: any) {
  setQuestions((prevState: any) => {
    let currentQuestion = null;
    prevState.map((masterQuestion: any, index: any) => {
      if (question.id === masterQuestion.id) {
        currentQuestion = index;
        return true;
      }
    });
    if (currentQuestion != null) {
      prevState[currentQuestion].completed = true;
    }
    return [...prevState];
  });
}
const TypeAnswer: React.FC<Props> = ({ question, setQuestions }) => {
  const [answer, setAnswer] = useState("o notation");
  const { result, setResult } = useResultValue();
  console.log(result);
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
            onClick={e =>
              handleButtonClick(answer, question, setQuestions, setResult)
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypeAnswer;
