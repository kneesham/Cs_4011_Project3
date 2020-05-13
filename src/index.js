
import React from 'react';
import ReactDOM from 'react-dom';
import "./css/styles.css";
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes } from "./Routes";

const Main = () => {
  return (
        <div className="celeste-speed-runner-app">
            <Router>
              <Routes />
            </Router>
        </div>
  );
}
ReactDOM.render(<Main />, document.querySelector("#root"))