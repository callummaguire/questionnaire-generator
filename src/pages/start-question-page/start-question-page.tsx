import React, { useState } from "react";
import RenderQuestionComponent from "../../render-component/render-question-component";

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
  return (
    <div className="container-center">
      <RenderQuestionComponent
        questions={questions}
        setQuestions={setQuestions}
      ></RenderQuestionComponent>
    </div>
  );
};

export default StartQuestionPage;
