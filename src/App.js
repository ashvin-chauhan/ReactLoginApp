import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Routes from './routes';
import Layout from './layout/layout';
import { authToken } from './helper.js';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: authToken()
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Layout>
              <Routes />
              { this.state.authToken &&
                <Redirect to="/welcome" />
              }
            </Layout>
            {this.props.children}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
