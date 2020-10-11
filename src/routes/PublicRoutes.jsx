import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/authentication/login/Login";
import Register from "../components/authentication/register/Register";
import Dashboard from "../components/dashboard/Dashboard";
import Ledger from "../components/ledger/Ledger";
import Credit from "../components/ledger/Credit";
import Debit from "../components/ledger/Debit";


const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props}/>} />
      <Route path="/dashboard" exact render={(props) => <Dashboard {...props} />} />
     <Route path="/ledger" exact render={() => <Ledger />} />
     <Route path="/ledger/credit" exact render={() => <Credit />} />
     <Route path="/ledger/debit" exact render={() => <Debit />} />

    </Switch>
  );
};

export default PublicRoutes;
