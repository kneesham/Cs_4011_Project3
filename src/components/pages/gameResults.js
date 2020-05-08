import React from 'react';
const Tesseract = window.Tesseract

export const GameResult = () => {
  const [uploads, setUploads] = React.useState([]);
  const [processedUploads, setProcessedUploads] = React.useState([]);
  const [progress, setProgress] = React.useState(0);
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
            text: result.text,
            confidence: result.confidence
          };
          setProcessedUploads(processedUploads => [
            ...processedUploads,
            upload
          ]);
          
        });
    });
    
  };
  return (
    <div className="background-fader">
    <div className="uploadResultPage">
      <header className="uploadHeader">
        <h1>Upload a screenshot of your completed level! </h1>
      </header>

      {/* File uploader */}
      <section className="uploadResultSection">
        <label className="fileUploaderContainer">
          Click here to upload your screenshot</label>
          <br/>
        <input
            type="file"
            id="fileUploader"
            onChange={handleChange}
            multiple
          />

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
            <div className="results__result__image">
              <img src={uploads[index]} alt={index} width="250px" />
            </div>
            <div className="results__result__info">
              <div className="results__result__info__codes">
                <h3>
                  <strong>Confidence Score Of Results:</strong> {result.confidence}
                </h3>
                <h2><strong>PLEASE CHECK YOUR RESULTS:</strong></h2>
              </div>

              <div className="upload-results">
                {/* <h1>
                  <strong>Full Output:</strong>
                  <pre>{result.text}</pre>
                </h1> */}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
    </div>
  );
};