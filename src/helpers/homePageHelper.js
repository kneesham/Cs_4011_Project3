// import React from 'react';
import axios from "axios";
import history from '../history';;
const addRecordUrl = "http://localhost:5000/addRecord";



const addRecord = async (levelName, deathsRecorded, berriesCollected, timePlayed) => {

    const username = localStorage.getItem("username");
    // local storage to hold the token so we only get it once.
    const posted = await axios.post(addRecordUrl, {
        record: {
            userId: username, 
            recordInfo: {
                levelName,
                deathsRecorded:parseInt(deathsRecorded),
                berriesCollected,
                timePlayed
            },
            dateRecorded: Date.now()
        }
    })
        .then(res => {
            console.log(res.data);
        }).catch((error) => {
            console.log("sign in error: ", error);
        })
    return posted;
}

const getRecordUrl =  "http://localhost:5000/allResults/for/";
const getUserRecords = async (userRecordHook) => {
    const token = localStorage.getItem("token");
    console.log("do we still have token?, ", token);
    const username = localStorage.getItem("username");
    console.log("username is: ", username);
    // local storage to hold the token so we only get it once.
    const records = await axios.get((getRecordUrl + username ), { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => {
            
            console.log("resulting data frm get user records: ", res.data);
            return res.data;
            
        }).catch((error) => {
            console.log("sign in error: ", error);
        });
        userRecordHook(records);

}

// const logUserIn = async (userCredentialsObj) => {

//     const didUserGetToken = await axios.post(getTokenUrl, userCredentialsObj)
//     .then( async (result) => { 
//         localStorage.setItem("token", result.data);
//         console.log(await signIn());

//     })
//     .catch((error) => {
//         console.log(error);
//     });
// }

export { addRecord, getUserRecords };

