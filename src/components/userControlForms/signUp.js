import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "../../css/login-styles.css"

const SignUp = () => {

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
                                <label className="form-label">Username</label>
                                <input type="text" placeholder="Your username here..." ></input>
                                <label className="form-label" >Password</label>
                                <input type="password" placeholder="Your password here..." ></input>
                                <label className="form-label" >Confirm your password</label>
                                <input type="password" placeholder="confirm password" ></input>
                                <label className="form-label">Username</label>
                                <input type="text" placeholder="Your username here..." ></input>
                            </form>
                        </div>
                        <div className="sign-in-sign-up-container">
                            <button className="cool-buttons sign-up"><Link to="/">Create Account!</Link></button>
                            <button className="cool-buttons green sign-up"> <Link to="/">Back</Link></button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}


export default withRouter(SignUp);



