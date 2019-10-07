import React, { useState } from "react";
import RenderedQuestionComponent from "../../render-component/render-question-component";
let apiQuestions = [
  {
    id: 1,
    question:
      "The notation that determines the estimated runtime of completion of program is called what?",
    order: 1,
    type: "type",
    completed: false,
    answer: "o notation"
  },
  {
    id: 2,
    question: "How do you spell blue?",
    order: 2,
    type: "type",
    completed: false,
    answer: "blue"
  },
  {
    id: 3,
    question: "How do you spell red?",
    order: 3,
    type: "type",
    completed: false,
    answer: "red"
  },
  {
    id: 4,
    question: "How do you spell yellow?",
    order: 4,
    type: "type",
    completed: false,
    answer: "yellow"
  },
  {
    id: 5,
    question: "How do you spell green?",
    order: 5,
    type: "type",
    completed: false,
    answer: "green"
  }
];

const StartQuestionPage: React.FC = () => {
  const [questions, setQuestions] = useState(apiQuestions);
  return (
    <div className="container-center">
      <RenderedQuestionComponent
        questions={questions}
        setQuestions={setQuestions}
      ></RenderedQuestionComponent>
    </div>
  );
};

export default StartQuestionPage;
