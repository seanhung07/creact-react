
import React from 'react';
import '../../src/App.css';
import titlepic from'../../src/title.png'
import { GoogleLogin } from 'react-google-login';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
    
 responseGoogle = (response) =>{
    console.log(response.googleId)
    if(!isNaN(response.googleId)){
        window.localStorage.setItem('token',response.googleId);
        window.location.replace("/dashboard");
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={titlepic} className="App-logo" alt="logo" />
          <div className="wrap-login100 p-t-30 p-b-50"><span className="login100-form-title p-b-35">Pacific American School </span></div>
          <GoogleLogin
            clientId="1015132118515-s5vvq9n86s6pabsvj8fkk6ic2d5iuuak.apps.googleusercontent.com"
            buttonText="Sign in With Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />         
        </header>
      </div>
    );
  }
}

export default withRouter(Login);