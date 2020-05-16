// import React from 'react';
import axios from "axios";
import history from '../history';;
const homeUrl = "http://localhost:5000/home";
const getTokenUrl = "http://localhost:5000/getToken";

const signIn = async () => {

    const token = localStorage.getItem("token");
    // local storage to hold the token so we only get it once.
    const didSignIn = await axios.get(homeUrl, { headers: { "Authorization": `Bearer ${token}` }})
        .then(res => {
            history.push('/home')
        }).catch((error) => {
            console.log("sign in error: ", error);
        });
    return didSignIn;
}

const logUserIn = async (userCredentialsObj) => {

    await axios.post(getTokenUrl, userCredentialsObj)
    .then( async (result) => { 
        localStorage.setItem("token", result.data);
        localStorage.setItem("username", userCredentialsObj.username)
        await signIn()
    })
    .catch((error) => {
        console.log(error);
    });
}

export { logUserIn };

