import React, { useState, useEffect } from "react";
import "../src/App.css";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import OrderForm from "../src/Components/orderform";




const App = () => {

const initialFormValues={
  pizzaSize: "",
  pizzaSauce: "",
  toppingsPep: "",
  toppingsExtraCheese: "",
  toppingsOlives: "",
  toppingsOnions: "",
  pizzaInstructions: "",
}

const initialFormErrors={
  pizzaSize: "",
  pizzaSauce: "",
  toppingsPep: "",
  toppingsExtraCheese: "",
  toppingsOlives: "",
  toppingsOnions: "",
  pizzaInstructions: "",
}

const initialOrders=[];
const initialDisabled=true;


  const [formValues, setFormValues]=useState(initialFormValues);
  const [formErrors, setFormErrors]=useState(initialFormErrors);
  const [orders, setOrders]=useState(initialOrders);
  const [disabled, setDisabled]=useState(initialDisabled);

  const onSubmit=function(event){
    event.preventDefault();

    const newOrder={
      pizzaSize: formValues.pizzaSize,
      pizzaSauce: formValues.pizzaSauce,
      toppingsPep: formValues.toppingsPep,
      toppingsExtraCheese: formValues.toppingsExtraCheese,
      toppingsOlives: formValues.toppingsOlives,
      toppingsOnions: formValues.toppingsOnions,
      pizzaInstructions: formValues.pizzaInstructions
    }

    setOrders([...orders, newOrder]);
    setFormValues(initialFormValues);

  }


  return (
    <div className="homepage">
      <HomeHeading>
      <h1>Lambda Eats</h1>
      <img className="logo" src="https://www.thedailymeal.com/sites/default/files/story/2017/pizza-roll.JPG" alt="pizza" />
      <ul>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order Pizza</Link>
        </ul>
        <Route path="/pizza">
          <OrderForm formValues={formValues} setFormValues={setFormValues} formErrors={formErrors} setFormErrors={setFormErrors} orders={orders} setOrders={setOrders} disabled={disabled} setDisabled={setDisabled} onSubmit={onSubmit} />
          </Route>
      <img src="https://globalnews.ca/wp-content/uploads/2014/01/nybz106-427_2007_151036_high.jpg?strip=all&resize=696,488" alt="pizza" />
      </HomeHeading>
    </div>
  );
};

//styled components
const HomeHeading=styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
font-size: 1.8rem;
`

export default App;

