import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Routes from './routes';
import Layout from './layout/layout';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
