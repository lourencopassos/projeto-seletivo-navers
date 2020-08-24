import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./login";
import Dashboard from "./Dashboard";
import CreateNaver from "./AddNaver";
import EditNaver from "./EditNaver";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/create-naver" component={CreateNaver} />
        <Route exact path="/edit-naver/:id" component={EditNaver} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
