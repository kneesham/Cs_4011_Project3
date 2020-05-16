import React from 'react';
import "../../css/topRecords.css";


const RecordBook = (props) => {
    console.log("the user's top records are", props.userTopRecord);
    const levels = [
        "Forsaken City",
        "old Site",
        "celestial Resort",
        "golden Ridge",
        "mirror Temple",
        "Reflection",
        "The Summit"
    ];

    return (
        <div className="background-fader-records">
            <div className="uploadResultPage">
                <header className="uploadHeader">
                    <h1>HERE'S A LOOK AT YOUR BEST RECORDS!</h1>
                </header>
                <div className="record-results">
                    {/* MAP OVER ALL THE RECORDS FROM THE USER */}

                    {props.userTopRecord.map((userRecord, index) => (
                        <div key={index} className="allResultsPage"> {
                            userRecord === null ?
                                <>
                                    <h2 className="level-name">{levels[index]}</h2>
                                    <div className="record-res">You Have yet to play this level!</div>
                                </>
                                :
                                <>
                                    <h2 className="level-name">{levels[index]}</h2>
                                    <div className="record-res">Level Number: {index + 1}</div>
                                    <div className="record-res">The date Recorded is: {userRecord.record.dateRecorded} </div>
                                    <div className="record-res" >Level Name: {userRecord.record.recordInfo.levelName} </div>
                                    <div className="record-res">Total Number of Deaths: {userRecord.record.recordInfo.deathsRecorded}</div>
                                    <div className="record-res">Total Number of Berries Collected: {userRecord.record.recordInfo.berriesCollected}</div>
                                    <div className="record-res">Total Time Spent: {userRecord.record.recordInfo.timePlayed} </div>
                                </>
                        }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default RecordBook;