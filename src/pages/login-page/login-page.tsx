import React from "react";
import FakeAuth from "../../auth/fake-auth";
import { RouteComponentProps } from "react-router-dom";

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("on submit");
    FakeAuth.login(() => {
      history.push("");
    });
  };

  return (
    <div className="login">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div>
            Login
            <input type="text"></input>
          </div>
          <div>
            Password
            <input type="password"></input>
          </div>

          <button className="btn-primary" type="submit">
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
