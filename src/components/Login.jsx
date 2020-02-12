
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import '../assets/App.css';
import Logo from '../assets/logo.png';

const Login = () => {
  function responseGoogle(response) {
    console.log(response);
    if (!isNaN(response.googleId)) {
      window.localStorage.setItem('token', response.googleId);
      window.location.replace("/documents");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <div className="wrap-login100 p-t-30 p-b-50">
          <span className="login100-form-title p-b-35">
            Pacific American School
          </span>
        </div>
        <GoogleLogin
          clientId="1015132118515-s5vvq9n86s6pabsvj8fkk6ic2d5iuuak.apps.googleusercontent.com"
          buttonText="Sign in With Google"
          onSuccess={(response) => responseGoogle(response)}
          onFailure={(response) => responseGoogle(response)}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
}

export default Login;
