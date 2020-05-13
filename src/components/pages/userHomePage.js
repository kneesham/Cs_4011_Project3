import React from 'react';
import "../../css/styles.css";
import "../../css/gameResultsStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { GameResult } from "./gameResults";
import AllResults from "./allResults";
import RecordBook from "./recordBook";
import { getUserRecords } from "../../helpers/homePageHelper";
import { withRouter, Link } from 'react-router-dom';


const UserHomePage = () => {
    const [toggleWelcome, setToggleWelcome] = React.useState(true);
    const [toggleUpload, setToggleUpload] = React.useState(false);
    const [toggleViewAll, setToggleViewAll] = React.useState(false);
    const [toggleRecords, setToggleRecordBook] = React.useState(false);
    // to switch between the screens of the home page.

    const [userRecords, setUserRecords] = React.useState([]);
    // will be an array of user records


    const toggleAllResults =  () => {
        setToggleUpload(false);

        getUserRecords(setUserRecords);
        setToggleViewAll(true);
        setToggleRecordBook(false);
        setToggleWelcome(false);

        



    };
    const toggleRecordBook = () => {
        setToggleUpload(false);
        setToggleViewAll(false);
        setToggleRecordBook(true);
        setToggleWelcome(false);

    };

    const toggleUploadPage = () => {
        setToggleUpload(true);
        setToggleViewAll(false);
        setToggleRecordBook(false);
        setToggleWelcome(false);

    };


    return (
        <>
            <nav id="navBar">
                <ul id="navElements">
                    <li onClick={toggleAllResults}>View All Results Page</li>
                    <li onClick={toggleRecordBook}>Record book</li>
                    <li onClick={toggleUploadPage} >Upload a new Result!</li>
                    <li> <Link to="/signout">Sign Out</Link></li>
                </ul>
            </nav>

            <div className="flex-grid">
                {toggleWelcome ? <div className="welcome-message"><h1>Welcome to Celeste Speed Runner!</h1></div> : <></>}
                {toggleRecords ? <RecordBook /> :<></> }
                {toggleViewAll? <AllResults userRecordArr={userRecords} /> :<></> }
                {toggleUpload ? <GameResult /> : <></>}
            </div>
        </>
    );
}

export default withRouter(UserHomePage);