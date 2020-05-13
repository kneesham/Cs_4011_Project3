const url = "http://localhost:5000/createAccount"

const didUserSignUp = async () => {
    if (showSignUp) {

        const userObj = {
            username: "u",
            password: "pass"
        }
        try {
            agent.post(url, null, userObj, {

            })

        }
        catch (err) {
            console.log(err);
        }

        console.log("creating a user ", userObj);


    } else {
        switchForms();
    }


}
