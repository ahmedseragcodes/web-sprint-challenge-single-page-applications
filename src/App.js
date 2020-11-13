import React, { useState } from "react";
import ReactDOM from "react-dom";
import Style from "./App.css"



const App = () => {

  const [form, setForm]=useState({
    size: "",
    sauce: "original red",
    toppings: "",
    substitute: false,
    instructions: "",
    quantity: null,
  })



  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <p>Build Your Own Pizza🍕</p>
      <img src="https://storage.pizzapizza.ca/phx2/ppl_images/category/fr/2x/create_your_own_2.png" alt="picture of pizza" />
      <form>
        {/*pizza size dropdown*/}
        <h2>Choose Your Pizza Size</h2>
        <label htmlFor="size">
          <select name="size" value={form.size} >
            <option value="">Select</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
          </select>
        </label>
        {/*Sauce Radio Selection */}
        <h2>Choose Your Pizza Sauce</h2>
        <label htmlFor="sauce">Original Red Sauce</label>
        <label htmlFor="sauce">Garlic Ranch</label>
        <label htmlFor="sauce">BBQ Sauce</label>
        <label htmlFor="sauce">Spinach Alfredo</label>
      </form>
    </div>
  );
};
export default App;
