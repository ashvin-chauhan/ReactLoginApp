import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import App from '../App/App';
import WelcomeScreen from '../WelcomeScreen'
import Dashboard from '../Dashboard';
import NotFound from '../NotFound';
import UserEdit from '../users/Edit'
import UserShow from '../users/Show';
import { isLoggedIn } from '../helper';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/registration" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/welcome" component={WelcomeScreen} />
    <PrivateRoute exact path="/users/:id/edit" component={UserEdit} />
    <PrivateRoute exact path="/users/:id" component={UserShow} />
    <Route component={NotFound} />
  </Switch>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
export default routes;