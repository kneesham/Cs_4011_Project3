import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "../../css/login-styles.css"
import { logUserIn } from "../../helpers/loginHelper";

const LoginPage = () => {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [didUserSignIn, setSignIn] = React.useState(false);

  const setUsernameText = (event) => {
    setUsername(event.target.value);
  }

  const setUserPass = (event) => {
    setPassword(event.target.value);
  }
  const signIn = () => {
    // send the current value of the hooks to the logInHelper function
    logUserIn({ username, password }, setSignIn)
    console.log("did the user sign in? ", didUserSignIn);
  }


  return (
    <div className="background-fader">
      <div className="foreground-container">
        <header className="uploadHeader">
          <h2 id="welcome-heading"><strong>Celeste Speed Runner!</strong></h2>
        </header>
        <section className="results">
          <div className="results__result">
            <div className="form-container">
              <form id="loginForm">
                <label className="form-label">Username</label>
                <input onChange={setUsernameText} id="usernameField" type="text" placeholder="Your username here..." ></input>
                <br />
                <label className="form-label" >Password</label>
                <input onChange={setUserPass} id="passwordField" type="password" placeholder="Your password here..." ></input>
              </form>
            </div>
            <div className="sign-in-sign-up-container">
              <button onClick={signIn} className="cool-buttons sign-in">Sign In</button>
              <button className="cool-buttons green sign-up"> <Link to="/signup"> New User</Link></button>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}

export default withRouter(LoginPage);
