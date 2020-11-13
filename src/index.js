import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import "./index.css";
import Home from "./Home";
import App from "./App";


ReactDOM.render(
<Router>
<App />
</Router>,
document.getElementById("root")
);
