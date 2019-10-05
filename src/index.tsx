import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StartQuestionPage from "../src/pages/start-question-page/start-question-page";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      {/* Need for component where route aren't found */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/questionpage" component={StartQuestionPage} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
