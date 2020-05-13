
import React from 'react';
import { Router, Switch, Route } from "react-router-dom";

import SignUp from "./components/userControlForms/signUp";
import LoginPage from "./components/userControlForms/Login";
import UserHomePage from "./components/pages/userHomePage";
import SignOutPage from "./components/pages/signOut";
import history from './history';


export const Routes = () => { 

    return (
        <>
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/home"  exact component={UserHomePage} />
                <Route path="/signout" component={SignOutPage} />
            </Switch>
        </Router>
        </>
    )

}

// module.exports = Routes;