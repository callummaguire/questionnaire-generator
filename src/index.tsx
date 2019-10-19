import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StartQuestionPage from "../src/pages/start-question-page/start-question-page";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ResultProvider } from "../src/context/results";
import { ProtectedRoute } from "./components/protected-routes";
import LoginPage from "./pages/login-page/login-page";

ReactDOM.render(
  <>
    <ResultProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute path="/questionpage" component={StartQuestionPage} />
          <Route
            path="*"
            component={() => <div className="App">404 error not found </div>}
          />
        </Switch>
      </BrowserRouter>
    </ResultProvider>
  </>,
  document.getElementById("root")
);
