import React from "react";
import Login from "./pages/login";
import Register from "./pages/register";
import Main from "./pages/main";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./pages/components/nav";

export default function App(){
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

