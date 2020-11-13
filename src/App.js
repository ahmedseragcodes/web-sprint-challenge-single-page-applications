import React, { useState } from "react";
import ReactDOM from "react-dom";
import Style from "./App.css"


//main component function creating pizza creation form 
const App = () => {


  //establishing state for form 
  const [form, setForm]=useState({
    size: "",
    sauce: "",
    toppings1: "",
    toppings2: "",
    toppings3: "",
    toppings4: "",
    toppings5: "",
    toppings6: "",
    substitute: "",
    instructions: "",
    quantity: null,
  })

  //event handler for form upon change 
  const handleChange = event => {
    //Pulling out info that matters
    const { name, type, value, checked }=event.target; 
    //Determining value to use
    const updatedInfo= type==="checkbox" ? checked : value;
    //Updating State 
    setForm({...form, [name]: updatedInfo })
    
  };

  //on submit handler
  const handleSubmit= event => {
    event.preventDefault();
    console.log("submitted");
  }


  //return for main component function creating form
  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <h2>Build Your Own Pizza🍕</h2>
      <img src="https://storage.pizzapizza.ca/phx2/ppl_images/category/fr/2x/create_your_own_2.png" alt="picture of pizza" />
      <form onSubmit={handleSubmit}>
        {/*pizza size dropdown*/}
        <h2>Choose Your Pizza Size</h2>
        <label htmlFor="size">
          <select name="size" value={form.size} onChange={handleChange} >
            <option value="">Select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        {/*Sauce Radio Selection*/}
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
        {/* Toppings Checkbox, 6 Checkboxes */}
        <h2>Add Toppings</h2>
        <label htmlFor="toppings1">Extra Cheese
          <input name="toppings1" type="checkbox" checked={form.toppings1} onChange={handleChange}  />
        </label>
        <label htmlFor="toppings2">Pepperoni
          <input name="toppings2" type="checkbox" checked={form.toppings2} onChange={handleChange}  />
        </label>
        <label htmlFor="toppings3">Green Pepper
          <input name="toppings3" type="checkbox" checked={form.toppings3} onChange={handleChange}  />
        </label>
        <label htmlFor="toppings4">Onions
          <input name="toppings4" type="checkbox" checked={form.toppings4} onChange={handleChange} />
        </label>
        <label htmlFor="toppings5">Black Olives
          <input name="toppings5" type="checkbox" checked={form.toppings5} onChange={handleChange}  />
        </label>
        <label htmlFor="toppings6">Pineapple
          <input name="toppings6" type="checkbox" checked={form.toppings6} onChange={handleChange} />
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
        <button>Add to Order $17.99</button>
      </form>
    </div>
  );
};
export default App;
