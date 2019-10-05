import React from "react";
import QuestionType from "../question-component/typed-answer/typed-answer";
import MultipleChoice from "../question-component/multiple-choice/multiple-choice";

interface Props {
  questions: any;
  setQuestions: any;
}

const RenderedQuestionComponent: React.FC<Props> = ({
  questions,
  setQuestions
}) => {
  let question = findCurrentQuestion(questions);

  return <div>{RenderQuestionFactory(question, setQuestions)}</div>;
};

function RenderQuestionFactory(question: any, setQuestions: any) {
  if (question.type === "type") {
    return <QuestionType question={question} setQuestions={setQuestions} />;
  }
  if (question.type === "multipleChoice") {
    return (
      <MultipleChoice
        question={question.question}
        questionAnswer={question.answer}
      ></MultipleChoice>
    );
  } else {
    return <div>Error</div>;
  }
}

function findCurrentQuestion(questions: any) {
  return questions.filter((x: any) => (x.completed ? null : x))[0];
}

export default RenderedQuestionComponent;
