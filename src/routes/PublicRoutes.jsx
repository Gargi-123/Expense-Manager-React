import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/authentication/login/Login";
import Register from "../components/authentication/register/Register";
import Dashboard from "../components/dashboard/Dashboard";


const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props}/>} />
      <Route path="/dashboard" exact render={(props) => <Dashboard {...props} />} />
     
    </Switch>
  );
};

export default PublicRoutes;
