import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

import Signup from "../pages/signup";
import Signin from "../pages/signin";
import Ad from "../pages/ad";
import List from "../pages/list";
import Indicators from "../pages/indicators";
import Home from "../pages/home";
// autentica rotas
const PrivateRout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <PrivateRout path="/register" component={Ad} />
      <Route path="/signup" component={Signup} />
      <PrivateRout path="/list" component={List} />
      <Route path="/indicators" component={Indicators} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
