import React from 'react';
import ReactDOM from 'react-dom';
import "./css/styles.css";
import "./css/gameResultsStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { GameResult } from "./components/pages/gameResults";
// import CharacterPage from "./api/CharacterList";
// import FilmList from "./api/FilmList";

const Main = () => {

    const [toggleProfile, setToggleMyProfile] = React.useState(false);
    const [toggleUpload, setToggleUpload] = React.useState(false);
    const [toggleViewAll, setToggleViewAll] = React.useState(false);
    const [toggleRecords, setToggleRecordBook] = React.useState(false);

    const toggleAllResults = () => {
        setToggleMyProfile(false);
        setToggleUpload(false);
        setToggleViewAll(true);
        setToggleRecordBook(false);

    };
    const toggleRecordBook = () => {
        setToggleMyProfile(false);
        setToggleUpload(false);
        setToggleViewAll(false);
        setToggleRecordBook(true);
    };

    const toggleUploadPage = () => {
        setToggleMyProfile(false);
        setToggleUpload(true);
        setToggleViewAll(false);
        setToggleRecordBook(false);
    };
    const toggleMyProfile = () => {
        setToggleMyProfile(true);
        setToggleUpload(false);
        setToggleViewAll(false);
        setToggleRecordBook(false);
    };

  return (
<>
            <nav id="navBar">
                <ul id="navElements">
                    <li onClick={setToggleViewAll}>View All Results Page</li>
                    <li onClick={setToggleRecordBook}>Record book</li>
                    <li onClick={setToggleUpload} >Upload a new Result!</li>
                    <li onClick={setToggleMyProfile}>My Profile</li>
                </ul>
            </nav>

            <div className="flex-grid">
                {/* {togglePeople ? <CharacterPage /> : <></>}
                {togglePlanet ? <PlanetPage /> : <></>}
                {toggleFilm ? <FilmList /> : <></>} */}
                {toggleUpload ? <GameResult /> : <></>}
            </div>
        </>
  );
}
ReactDOM.render(<Main />, document.querySelector("#root"))