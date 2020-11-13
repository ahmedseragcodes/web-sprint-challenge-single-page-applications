import React, { useState } from "react";
import ReactDOM from "react-dom";
import Style from "./App.css"


//main component function creating pizza creation form 
const App = () => {


  //establishing state for form 
  const [form, setForm]=useState({
    size: "",
    sauce: "",
    toppings: "",
    substitute: "",
    instructions: "",
    quantity: null,
  })

  //event handler for form upon change 
  const handleChange = event => { setForm(event.target.value)};


  //return for main component function creating form
  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <h2>Build Your Own Pizza🍕</h2>
      <img src="https://storage.pizzapizza.ca/phx2/ppl_images/category/fr/2x/create_your_own_2.png" alt="picture of pizza" />
      <form>
        {/*pizza size dropdown*/}
        <h2>Choose Your Pizza Size</h2>
        <label htmlFor="size">
          <select name="size" value={form.size} onChange={handleChange} >
            <option value="">Select</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
          </select>
        </label>
        {/*Sauce Radio Selection */}
        <h2>Choose Your Pizza Sauce</h2>
        <label htmlFor="sauce">Original Red Sauce
        <input name="sauce" type="radio" value="a" checked={form.sauce==="a"} onChange={handleChange} />
        </label>
        <label htmlFor="sauce">Garlic Ranch
        <input name="sauce" type="radio" value="b" checked={form.sauce==="b"} onChange={handleChange} />
        </label>
        <label htmlFor="sauce">BBQ Sauce
        <input name="sauce" type="radio" value="c" checked={form.sauce==="c"} onChange={handleChange} />
        </label>
        <label htmlFor="sauce">Spinach Alfredo
        <input name="sauce" type="radio" value="d" checked={form.sauce==="d"} onChange={handleChange} />
        </label>
        {/* Toppings Checkbox */}
        <h2>Add Toppings</h2>
        <label htmlFor="toppings">Extra Cheese
          <input name="toppings" type="checkbox" checked={form.toppings} onChange={handleChange} />
        </label>
        <label htmlFor="toppings">Pepperoni
          <input name="toppings" type="checkbox" checked={form.toppings} onChange={handleChange} />
        </label>
        <label htmlFor="toppings">Green Pepper
          <input name="toppings" type="checkbox" checked={form.toppings} onChange={handleChange} />
        </label>
        <label htmlFor="toppings">Onions
          <input name="toppings" type="checkbox" checked={form.toppings} onChange={handleChange} />
        </label>
        <label htmlFor="toppings">Black Olives
          <input name="toppings" type="checkbox" checked={form.toppings} onChange={handleChange} />
        </label>
        <label htmlFor="toppings">Pineapple
          <input name="toppings" type="checkbox" checked={form.toppings} onChange={handleChange} />
        </label>
        {/*Choice Of Substitute Crust Checkbox*/}
        <h2>Change Your Crust</h2>
        <label htmlFor="substitute">Gluten Free Crust (+ $1.00)
          <input name="substitute" type="checkbox" value={form.substitute} checked={form.substitute} onChange={handleChange} />
        </label>
        {/*Special Instructions Text Input */}
        <h2>Any Special Instructions?</h2>
        <label htmlFor="instructions">
          <input name="instructions" value={form.instructions} type="text" onChange={handleChange} />
        </label>
        {/*Quantity number input*/}
        <h2>How Many Pizzas?</h2>
        <label htmlFor="quantity">
          <input name="quantity" type="number" value={form.quantity} onChange={handleChange} />
        </label>
        {/*Add to Order Button*/}
        <h2>Finalize Order</h2>
        <button type="submit">Add to Order $17.99</button>
      </form>
    </div>
  );
};
export default App;
