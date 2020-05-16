
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

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