import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import WelcomeScreen from '../WelcomeScreen';
import Dashboard from '../Dashboard';
import NotFound from '../NotFound';
import UserEdit from '../users/Edit';
import UserShow from '../users/Show';
import Customers from '../Customers';
import { isLoggedIn } from '../helper';

const routes = () =>
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/registration" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/welcome" component={WelcomeScreen} />
    <PrivateRoute exact path="/users/:id/edit" component={UserEdit} />
    <PrivateRoute exact path="/users/:id" component={UserShow} />
    <PrivateRoute exact path="/customers" component={Customers} />
    <PrivateRoute exact path="/customers/:id" component={UserShow} />
    <PrivateRoute exact path="/customers/:id/edit" component={UserEdit} />
    <Route component={NotFound} />
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
