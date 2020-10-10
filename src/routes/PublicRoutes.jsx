import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/authentication/login/Login";
import Register from "../components/authentication/register/Register";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Login />} />
      <Route path="/register" render={() => <Register />} />
    </Switch>
  );
};

export default PublicRoutes;
