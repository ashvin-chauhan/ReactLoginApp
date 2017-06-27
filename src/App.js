import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
