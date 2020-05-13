import React from 'react';
import "../../css/allResults.css";

const AllResults = (props) => {
    const [isEditing, setEditing] = React.useState(false);

    const [levelText, setLevelText] = React.useState("");
    const [deathCount, setDeathCount] = React.useState("");
    const [berryCount, setBerryCount] = React.useState("");
    const [timePlayed, setTimePlayed] = React.useState("");


    const edit = (event) => {
        console.log(event.target, "event target");
        setEditing(!isEditing);

    }

    const updateLevelText = event => {
        setLevelText(event.target.value);
      }
      const updateDeathText = event => {
        setDeathCount(event.target.value);
      }
      const updateBerryText = event => {
        setBerryCount(event.target.value);
      }
      const updateTimeText = event => {
        setTimePlayed(event.target.value);
      }
    

    return (
        <div className="all-result-container">
            <header className="uploadHeader">
                <h1 className="uploadHeaderText">HERE'S A LOOK AT ALL OF YOUR RECORDS EVER</h1>
            </header>

            <section className="results">
                <div className="upload-results">
                    {/* MAP OVER ALL THE RECORDS FROM THE USER */}
                    {
                        props.userRecordArr.map((userRecord, index) => (
                            <div key={userRecord._id} >
                                <div className="result-fader">
                                    <div className="allResultsPage">
                                        <div>{index}</div>
                                        <div >{JSON.stringify(userRecord.record)}</div>
                                        <button className="cool-buttons">DELETE THIS RECORD</button>
                                        <button onClick={edit} className="cool-buttons">EDIT</button>

                                        {!isEditing ? <></> :

                                            <form className="editForm">
                                                <div>
                                                    <label>Level name</label>
                                                    <input className="edit-field" type={"text"} value={levelText} onChange={updateLevelText} ></input>
                                                </div>
                                                <br/>
                                                <div>
                                                    <label>Number of deaths:</label>
                                                    <input className="edit-field" type={"text"} value={deathCount} onChange={updateDeathText} ></input>
                                                </div>
                                                <br/>
                                                <div>
                                                    <label>Berries collected:</label>
                                                    <input className="edit-field" type={"text"} value={berryCount} onChange={updateBerryText} ></input>
                                                </div>
                                                <br/>
                                                <div>
                                                    <label>Time played:</label>
                                                    <input className="edit-field" type={"text"} value={timePlayed} onChange={updateTimeText}></input>
                                                </div>
                                            </form>

                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </div>
    )
}


export default AllResults;