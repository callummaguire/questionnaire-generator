import React from "react";
import { withRouter } from "react-router-dom";

interface Props {
  history: any;
}

const Homepage: React.FC<Props> = ({ history }) => {
  return (
    <div className="landing-page-container">
      <div className="">
        <h1>Question Time</h1>
        <button
          className="btn-primary"
          onClick={() => history.push("questionpage")}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default withRouter(Homepage);
