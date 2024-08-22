import React from "react";
import Login from "./pages/login";
import Register from "./pages/register";
import Main from "./pages/main";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App(){
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

