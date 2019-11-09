import React from "react";
import TypeAnswer from "../question-type/typed-answer";
import MultipleChoice from "../question-type/multiple-choice";
import { useResultValue } from "../../context/results";
import ResultPage from "../../pages/result-page";
import QuizRunningResult from "../quiz-running result";
interface Props {
  questions: any;
  setQuestions: any;
}

const RenderedQuestionComponent: React.FC<Props> = ({
  questions,
  setQuestions
}) => {
  const { result, setResult } = useResultValue();
  let question = findCurrentQuestion(questions);
  setNumberOfQuestions(setResult, result, questions);

  if (
    result.count ===
    result.answerCorrectQuestion + result.answerIncorrectQuestion
  ) {
    return <ResultPage></ResultPage>;
  } else {
    return (
      <div>
        {RenderQuestionFactory(question, setQuestions)}
        <QuizRunningResult center={false}></QuizRunningResult>
      </div>
    );
  }
};

function RenderQuestionFactory(question: any, setQuestions: any) {
  if (question.type === "type") {
    return <TypeAnswer question={question} setQuestions={setQuestions} />;
  }
  if (question.type === "multipleChoice") {
    return (
      <MultipleChoice
        question={question}
        setQuestions={setQuestions}
      ></MultipleChoice>
    );
  } else {
    return <div>Error</div>;
  }
}

function findCurrentQuestion(questions: any) {
  const unanswerQuestions = questions.filter((x: any) =>
    x.completed ? null : x
  )[0];

  return unanswerQuestions;
}

function setNumberOfQuestions(setResult: any, result: any, questions: any) {
  if (result.count === 0) {
    setResult({
      answerCorrectQuestion: 0,
      answerIncorrectQuestion: 0,
      count: questions.length
    });
  }
}

export default RenderedQuestionComponent;
