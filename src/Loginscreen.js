import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
// import routes from './routes'
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
			loginscreen:loginscreen,
			loginmessage:loginmessage
    })
  }
	handleClick(event){
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<Register parentContext={this}/>);
      loginmessage = "Already registered.Go to Login";
      this.setState({
				loginscreen:loginscreen,
				loginmessage:loginmessage,
				buttonLabel:"Login",
				isLogin:false
			})
    }
    else{
      var loginscreen=[];
      loginscreen.push(<Login parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
				loginscreen:loginscreen,
				loginmessage:loginmessage,
				buttonLabel:"Register",
				isLogin:true
			})
    }
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <Router>
              <div>
                <Link to="/registration">
                  <RaisedButton label={this.state.buttonLabel} primary={true} style={style}/>
                  {/*<Route path="/registration" component={Register} />*/}
                </Link>
              </div>
            </Router>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Loginscreen;