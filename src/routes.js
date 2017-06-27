import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import App from './App';
import WelcomeScreen from './WelcomeScreen'
import Dashboard from './Dashboard';
import NotFound from './NotFound';
const routes = () => (
  <App>
    <Router>
      <div>
        <Route path="/" component={Dashboard} />
        <Route path="/registration" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={WelcomeScreen} />
        <Route path="*" component={NotFound} />
      </div>
    </Router>
  </App>
);
 
export default routes;