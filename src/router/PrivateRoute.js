import React from "react";
import { Redirect, Route } from "react-router-dom";
import User from "../pages/User";
const PrivateRoute = ({ path, component: Component, isAuth, likes }) => {
  return isAuth ? (
    <Route
      path={path}
      render={(props) => <Component likes={likes} {...props} />}
    />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
