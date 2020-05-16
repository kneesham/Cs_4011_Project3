import axios from "axios";
const addRecordUrl = "http://localhost:5000/addRecord";

const addRecord = async (levelName, deathsRecorded, berriesCollected, timePlayed) => {

    const username = localStorage.getItem("username");
    // local storage to hold the token so we only get it once.
    const posted = await axios.post(addRecordUrl, {
        record: {
            userId: username,
            recordInfo: {
                levelName,
                deathsRecorded: parseInt(deathsRecorded),
                berriesCollected,
                timePlayed
            },
            dateRecorded: Date.now()
        }
    })
        .then(res => {
            window.location.reload();
        }).catch((error) => {
            console.log("sign in error: ", error);
        })
    return posted;
}

const getRecordUrl = "http://localhost:5000/allResults/for/";
const getUserRecords = async (userRecordHook) => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    // local storage to hold the token so we only get it once.
    const records = await axios.get((getRecordUrl + username), { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => {
            return res.data;

        }).catch((error) => {
            console.log("sign in error: ", error);
        });
    userRecordHook(records);
}

const getBestRecordsUrl = "http://localhost:5000/myRecords/records"
const getUserTopRecords = async (topRecordHook) => {
    const token = localStorage.getItem("token");
    const topRecords = await axios
        .get(`${getBestRecordsUrl}/${localStorage.getItem("username")}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then((res) => {
            return res.data;
        })
        .catch(err => console.log(err.response.data));
    topRecordHook(topRecords);
}

const updateRecordUrl = "http://localhost:5000/updateRecord/byid";
const updateRecord = async (updatedObject, objectKey) => {
    await axios
        .patch(`${updateRecordUrl}/${objectKey}`, updatedObject)
        .catch(err => console.log(err.response.data));
    window.location.reload();
}

const deleteUrl = "http://localhost:5000/deleteRecord/byid";
const deleteRecord = async (objectKey) => {

    await axios
        .delete(`${deleteUrl}/${objectKey}`)
        .catch(err => console.log(err.response.data));
    window.location.reload();
}

export { addRecord, getUserRecords, updateRecord, deleteRecord, getUserTopRecords };

