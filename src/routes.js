import React, {Component} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import App from './App';
import WelcomeScreen from './WelcomeScreen'
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import UserEdit from './users/Edit'
import Layout from './layout/layout'
const routes = () => (
  <div>
    <Route exact path="/" component={Dashboard} />
    <Route path="/registration" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/welcome" component={WelcomeScreen} />
    <Route path="/users/:id/edit" component={UserEdit} />
    <Route path="*" component={NotFound} />
  </div>
)
export default routes;