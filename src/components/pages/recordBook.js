import React from 'react';

const RecordBook = () => {

    return (
        <div className="background-fader">
            <div className="uploadResultPage">
                <header className="uploadHeader">
                    <h1>HERE'S A LOOK AT YOUR BEST RECORDS!</h1>
                </header>
                <section className="uploadResultSection">

                </section>

                <section className="results">
                        <div className="upload-results">
                            {/* MAP OVER ALL THE RECORDS FROM THE USER */}
                            <button className="cool-buttons">DELETE THIS RECORD</button>
                        </div>
                </section>
            </div>
        </div>
    )
}



export default RecordBook;