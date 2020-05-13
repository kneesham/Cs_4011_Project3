import React from 'react';
import {addRecord} from "../../helpers/homePageHelper";

const Tesseract = window.Tesseract

export const GameResult = () => {
  const [uploads, setUploads] = React.useState([]);
  const [processedUploads, setProcessedUploads] = React.useState([]);
  const [progress, setProgress] = React.useState(0);
  const [levelText, setLevelText] = React.useState("");
  const [deathCount, setDeathCount] = React.useState("");
  const [berryCount, setBerryCount] = React.useState("");
  const [timePlayed, setTimePlayed] = React.useState("");

  const handleChange = event => {
    if (event.target.files[0]) {
      var uploads = [];
      for (var key in event.target.files) {
        if (!event.target.files.hasOwnProperty(key)) continue;
        let upload = event.target.files[key];
        uploads.push(URL.createObjectURL(upload));
      }
      setUploads(uploads);
    } else {
      setUploads(uploads);
    }
    
  };

  const submitRecord = () => {
    addRecord(levelText, deathCount, berryCount, timePlayed);
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

  const generateText = () => {
      
    uploads.map(file => {
      Tesseract.recognize(file, {
        lang: 'eng'
      })
        .progress(p => {
          console.log('progress', p);

          setProgress(p.progress);
        })
        .then(result => {
          console.log("the resulting text is : " + result.text);
          const upload = {
            text: result.text.split(" "),
            confidence: result.confidence
          };
          setProcessedUploads(processedUploads => [upload]);
          setLevelText(upload.text[0] + " " + upload.text[1]);
          setBerryCount(upload.text[5]);
          setDeathCount(upload.text[6]);
          setTimePlayed(upload.text[7]);
        });
    });
    
  };
  return (
    <div className="background-fader">
    <div className="uploadResultPage">
      <header className="uploadHeader">
        <h1>Upload your completed level! </h1>
        <h2>for best results please crop or use (cmd+Shift+4) to look like this:</h2>
        <img className="exampleImg" src={require("../../img/example.png")} alt={"example.png"}></img>
      </header>

      {/* File uploader */}
      <section className="uploadResultSection">
        <label className="fileUploaderContainer">
          <h4>Upload your screenshot</h4></label>
          <br/>
        <input
            type="file"
            id="fileUploader"
            onChange={handleChange}
            multiple
          />

        <div>
          {
            <img className="exampleImg"  src={uploads[0]} alt="your picture here"  />
         }
        </div>

        <button className="button" onClick={generateText}>
          Generate
        </button>
        <div id="progressBar">
          { progress > 0 ? Math.floor(progress * 100) + "%": ""}
        </div>
      </section>

      <section className="results">
        {processedUploads.map((result, index) => (

          
          <div key={index} className="results__result">
            <div className="results_of_generation">
              <div className="confidenceDiv">
                <h5>
                  Confidence Score Of Results:{result.confidence}
                </h5>
              </div>

              <div className="upload-results">
              <h3 id="checkResults"><strong>PLEASE CHECK YOUR RESULTS:</strong></h3>
                <form id="uploadForm">
                  <div>
                  <label>Level name</label>
                  <input className="text-field" type={"text"} value={levelText} onChange={updateLevelText} ></input>
                  </div>
                  <div>
                  <label>Number of deaths:</label>
                  <input className="text-field" type={"text"} value={deathCount} onChange={updateDeathText} ></input>
                  </div>
                  <div>
                  <label>Berries collected:</label>
                  <input className="text-field" type={"text"} value={berryCount} onChange={updateBerryText} ></input>
                  </div>
                  <div>
                  <label>Time played:</label>
                  <input className="text-field" type={"text"} value={timePlayed} onChange={updateTimeText}></input>
                  </div>
                </form>
                <button onClick={submitRecord} className="cool-buttons">These results look good, post</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
    </div>
  );
};