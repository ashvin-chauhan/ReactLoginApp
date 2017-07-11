import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../AsyncComponent';
import { isLoggedIn } from '../helper';

const asyncLogin = asyncComponent(() => import('../Login'));
const asyncRegister = asyncComponent(() => import('../Register'));
const asyncWelcomeScreen = asyncComponent(() => import('../WelcomeScreen'));
const asyncDashboard = asyncComponent(() => import('../Dashboard'));
const asyncNotFound = asyncComponent(() => import('../NotFound'));
const asyncUserEdit = asyncComponent(() => import('../users/Edit'));
const asyncUserShow = asyncComponent(() => import('../users/Show'));
const asyncCustomers = asyncComponent(() => import('../Customers'));

const routes = () =>
  <Switch>
    <Route exact path="/" component={asyncDashboard} />
    <Route path="/registration" component={asyncRegister} />
    <Route path="/login" component={asyncLogin} />
    <Route path="/welcome" component={asyncWelcomeScreen} />
    <PrivateRoute exact path="/users/:id/edit" component={asyncUserEdit} />
    <PrivateRoute exact path="/users/:id" component={asyncUserShow} />
    <PrivateRoute exact path="/customers" component={asyncCustomers} />
    <PrivateRoute exact path="/customers/:id" component={asyncUserShow} />
    <PrivateRoute exact path="/customers/:id/edit" component={asyncUserEdit} />
    <Route component={asyncNotFound} />
  </Switch>;

const PrivateRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      isLoggedIn()
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />}
  />;
export default routes;
