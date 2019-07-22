import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

import Signup from "../pages/signup";
import Signin from "../pages/signin";
import Ad from "../pages/ad";
import List from "../pages/list";
import Indicators from "../pages/indicators";
import Home from "../pages/home";
import ListFriend from "../pages/listfriend";
import Edit from "../pages/edit";
import Voucher from "../pages/voucher";
import Listusers from "../pages/listusers";

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
      <Route path="/signup" component={Signup} />
      <PrivateRout path="/register" component={Ad} />
      <Route path="/listusers" component={Listusers} />
      <PrivateRout path="/list" component={List} />
      <PrivateRout path="/voucherstudent" component={Voucher} />
      <Route path="/indicators" component={Indicators} />
      <Route path="/listfriend" component={ListFriend} />
      <Route path="/addfriend/edit/:id" component={Edit} />
      <PrivateRout path="/register" component={Ad} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
