import React, { useState } from "react";
import RenderedQuestionComponent from "../../render-component/render-question-component";

let apiQuestions = [
  {
    question:
      "The notation that determines the estimated runtime of completion of program is called what?",
    order: 1,
    type: "type",
    completed: false,
    answer: "o notation"
  },
  {
    question:
      "The notation that determines the estimated runtime of completion of program is called what?",
    order: 2,
    completed: false,
    type: "multipleOptions",
    optionId: 123
  }
];

const StartQuestionPage: React.FC = () => {
  const [questions, setQuestions] = useState(apiQuestions);
  console.log("start page questions", questions);
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
