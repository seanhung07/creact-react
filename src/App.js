import React from 'react';
import './App.css';
import titlepic from'./title.png'
import { GoogleLogin } from 'react-google-login';

function App() {
    
const responseGoogle = (response) =>{
    console.log(response.Zi.id_token)
    if(isNaN(response.Zi.id_token)){
        window.localStorage.setItem('token',response.Zi.id_token);
        this.props.history.push("/dashboard")
    }
}
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={titlepic} className="App-logo" alt="logo" />
          <div className="wrap-login100 p-t-30 p-b-50"><span className="login100-form-title p-b-35">Pacific American School </span></div>
          <GoogleLogin
            clientId="1015132118515-s5vvq9n86s6pabsvj8fkk6ic2d5iuuak.apps.googleusercontent.com"
            buttonText="Sign in With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          
         
        </header>
      </div>
    );
  }

export default App;