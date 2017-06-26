import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Loginscreen from './Loginscreen';
import WelcomeScreen from './WelcomeScreen';
import Register from './Register';
injectTapEventPlugin();


const token = localStorage.getItem('AUTH_TOKEN');

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      welcomeScreen:[]
    }
  }
  componentWillMount () {
    var loginPage = [];
    var welcomeScreen = []
    if (token) {
      welcomeScreen.push(<WelcomeScreen parentContext={this}/>)
    } else {
      loginPage.push(<Loginscreen parentContext={this}/>);
    }

    this.setState({
      loginPage: loginPage,
      welcomeScreen: welcomeScreen
    })
  }
  render() {
    return (
      <div className="App">
        {/*<Router history={hashHistory}>
          <Route path='/registration' component={Register} />
          <Route path='*' component={NotFound} />
        </Router>*/}
        {this.state.loginPage}
        {this.state.welcomeScreen}
      </div>
    );
  }
}

export default App;
