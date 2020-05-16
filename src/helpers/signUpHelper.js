
import history from './../history';
import axios from "axios";

const url = "http://localhost:5000/createAccount";
const SignUpFunc = (userCredentialsObj) => {

    axios.post(url, userCredentialsObj)
        .then((result) => {
            history.push("/");
        })
        .catch((error) => {
            console.log(error);
        });
}

export { SignUpFunc };