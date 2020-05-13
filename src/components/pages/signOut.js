import React from "react"
import { withRouter, Link } from 'react-router-dom';

// https://media.criticalhit.net//2019/09/Celeste.jpg

const SignOutPage = () => {
    return (

        <div className="background-fader">
            <div className="uploadResultPage">
                <header className="uploadHeader">
                    <h1>Goodbye user!</h1>
                </header>
                <section className="results">
                    <div className="upload-results">
                        {/* MAP OVER ALL THE RECORDS FROM THE USER */}
                        <button className="cool-buttons"><Link to="/" >CLICK HERE TO SIGN BACK IN!</Link></button>
                    </div>
                </section>
            </div>
        </div>
    )

}


export default withRouter(SignOutPage);