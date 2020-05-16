import React from 'react';
import { updateRecord, deleteRecord } from "../../helpers/homePageHelper";
import "../../css/allResults.css";

const AllResults = (props) => {
    const [isEditing, setEditing] = React.useState(false);
    const [levelText, setLevelText] = React.useState("");
    const [deathCount, setDeathCount] = React.useState("");
    const [berryCount, setBerryCount] = React.useState("");
    const [timePlayed, setTimePlayed] = React.useState("");

    const edit = (event) => {
        const nodeToEdit = event.target.parentNode.parentNode;
        // get the outermost node.
        const nodeClass = nodeToEdit.className;
        const otherRecords = document.getElementsByClassName(nodeClass)

        for (let i = 0; i < otherRecords.length; i++) {
            otherRecords[i].classList.toggle("hide-this");
        }

        nodeToEdit.classList.toggle("hide-this");
        setEditing(!isEditing);
        setLevelText("");
        setDeathCount("");
        setBerryCount("");
        setTimePlayed("");
        // flush all of the state when edit is pressed to make sure not just appending to an old update.
    }

    const deleteThis = (event) => {
        const objectKey = event.target.value;
        console.log(objectKey);
        deleteRecord(objectKey);
    }
    const submitForm = (event) => {
        const objectKey = event.target.value;
        const updatedObject = {
            "record":
            {
                "recordInfo":
                {
                    "levelName": levelText,
                    "deathsRecorded": deathCount,
                    "berriesCollected": berryCount,
                    "timePlayed": timePlayed
                },
                "userId": localStorage.getItem("username")
            }
        };
        updateRecord(updatedObject, objectKey);
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
                                        <div className="record-res">Record number: {index}</div>
                                        <div className="record-res">The date Recorded is: {userRecord.record.dateRecorded} </div>
                                        <div className="record-res" >Level Name: {userRecord.record.recordInfo.levelName} </div>
                                        <div className="record-res">Total Number of Deaths: {userRecord.record.recordInfo.deathsRecorded}</div>
                                        <div className="record-res">Total Number of Berries Collected: {userRecord.record.recordInfo.berriesCollected}</div>
                                        <div className="record-res">Total Time Spent: {userRecord.record.recordInfo.timePlayed} </div>
                                        <button value={userRecord._id} onClick={deleteThis} className="cool-buttons">DELETE THIS RECORD</button>
                                        <button onClick={edit} className="cool-buttons">EDIT</button>

                                        {isEditing ? <>
                                            <h5 className="message">Be sure to re-populate ALL fields</h5>
                                            <form className="editForm">
                                                <div>
                                                    <label>Level name</label>
                                                    <input className="edit-field" type={"text"} value={levelText} placeholder={userRecord.record.recordInfo.levelName} onChange={updateLevelText}></input>
                                                </div>
                                                <br />
                                                <div>
                                                    <label>Number of deaths:</label>
                                                    <input className="edit-field" type={"text"} value={deathCount} placeholder={userRecord.record.recordInfo.deathsRecorded} onChange={updateDeathText} ></input>
                                                </div>
                                                <br />
                                                <div>
                                                    <label>Berries collected:</label>
                                                    <input className="edit-field" type={"text"} value={berryCount} placeholder={userRecord.record.recordInfo.berriesCollected} onChange={updateBerryText} ></input>
                                                </div>
                                                <br />
                                                <div>
                                                    <label>Time played:</label>
                                                    <input className="edit-field" type={"text"} value={timePlayed} placeholder={userRecord.record.recordInfo.timePlayed} onChange={updateTimeText}></input>
                                                </div>

                                            </form>
                                            <div> <button value={userRecord._id} className="cool-buttons" onClick={submitForm}>Submit Changes</button></div> </> : <></>}
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