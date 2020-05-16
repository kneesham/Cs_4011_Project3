import React from "react"
import { withRouter, Link } from 'react-router-dom';
import "../../css/signOutStyles.css";

const SignOutPage = () => {
    return (
        <div className="background-fader-sign-out">
                    <div className="upload-results">
                    <h1 className="sign-out-message">Goodbye user!</h1>
                        {/* MAP OVER ALL THE RECORDS FROM THE USER */}
                        <button className="cool-buttons"><Link to="/" >CLICK HERE TO SIGN BACK IN!</Link></button>
                    </div>
        </div>
    )
}
export default withRouter(SignOutPage);