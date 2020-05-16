import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SignUpFunc } from "../../helpers/signUpHelper"
import "../../css/login-styles.css"

const SignUp = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const updateUsername = (event) => {

        setUsername(event.target.value);
    }
    const updatePass = (target) => {
        setPassword(target.target.value);
    }

    const completeSignUp = () => {
        const newUser = {
            username,
            password
        }
        SignUpFunc(newUser);
    }

    return (
        <div className="background-fader">
            <div className="foreground-container">
                <header className="uploadHeader">
                    <h2 id="welcome-heading"><strong>Sign Up!</strong></h2>
                </header>
                <section className="results">
                    <div className="results__result">
                        <div className="form-container">
                            <form id="signUpForm">
                                <label className="form-label" >Username</label>
                                <input onChange={updateUsername} value={username} type="text" placeholder="Your username here..." ></input>
                                <label className="form-label"  >Password</label>
                                <input onChange={updatePass} value={password} type="password" placeholder="Your password here..." ></input>
                            </form>
                        </div>
                        <div className="sign-in-sign-up-container">
                            <button onClick={completeSignUp} className="cool-buttons sign-up">Create Account!</button>
                            <button className="cool-buttons green sign-up"> <Link to="/">Back</Link></button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default withRouter(SignUp);



