import React, { useState, createContext, useContext } from "react";

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [result, setResult] = useState({
    count: 0,
    answerCorrectQuestion: 0,
    answerIncorrectQuestion: 0
  });

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultValue = () => useContext(ResultContext);
