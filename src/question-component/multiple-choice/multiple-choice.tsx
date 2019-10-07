import React, { useState } from "react";
import { useResultValue } from "../../context/results";

interface Props {
  question: any;
  setQuestions: any;
}

function handleButtonClick(
  question: any,
  answer: any,
  setQuestions: any,
  setResult: any
) {
  setCompletedQuestion(setQuestions, question);

  if (answer === question.answer) {
    correctAnswer(setResult);

    console.log("correct!");
  } else {
    console.log("wrong!");
    inCorrectAnswer(setResult);
  }
}

function correctAnswer(setResult: any) {
  setResult((preResultState: any) => {
    preResultState.answerCorrectQuestion =
      preResultState.answerCorrectQuestion + 1;
    return { ...preResultState };
  });
}
function inCorrectAnswer(setResult: any) {
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

const MultipleChoice: React.FC<Props> = ({ question, setQuestions }) => {
  const { setResult } = useResultValue();

  let choice = ["hair", "green", "chocolate", "big"];
  return (
    <div className="multiple-choice">
      <h1>{question.question}</h1>
      <div className="multiple-choice-grid">
        {choice.map((answer: any, index: number) => (
          <button
            className="btn-primary-no-margin"
            key={index}
            onClick={() =>
              handleButtonClick(question, answer, setQuestions, setResult)
            }
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;
