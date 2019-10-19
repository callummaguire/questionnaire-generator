import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import auth from "../auth/fake-auth";

export const ProtectedRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuth()) {
          return (
            <>
              <Component {...props} />
            </>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
