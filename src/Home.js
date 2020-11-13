import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

export default function Home(){
    return (
        
        <div className="App">
          <h1>Lambda Eats</h1>
          <ul className="navBar">
            <li>
          <Link to="/Home">Home</Link><br></br>
          </li>
          <li>
          <Link to="/OrderNow">Order Now</Link>
          </li>
          </ul>
          </div>
    )
}