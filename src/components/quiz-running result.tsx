import React from "react";
import { useResultValue } from "../context/results";

interface Props {
  center: boolean;
}

const QuizRunningResult: React.FC<Props> = ({ center }) => {
  const { result } = useResultValue();

  return (
    <div className="result">
      {center ? (
        <p>{result.answerCorrectQuestion + " / " + result.count}</p>
      ) : (
        <div className="container-right-bottom">
          <p>{result.answerCorrectQuestion + " / " + result.count}</p>
        </div>
      )}
    </div>
  );
};

export default QuizRunningResult;
