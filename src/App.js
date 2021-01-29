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
  toppingsPep: false,
  toppingsExtraCheese: false,
  toppingsOlives: false,
  toppingsOnions: false,
  pizzaInstructions: ""
}

const initialFormErrors={
  pizzaSize: "",
  pizzaSauce: "",
  toppingsPep: "",
  toppingsExtraCheese: "",
  toppingsOlives: "",
  toppingsOnions: "",
  pizzaInstructions: ""
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
    <div>
      <HomeHeading>
      <h1>Lambda Eats</h1>
      <
      </HomeHeading>
    </div>
  );
};
export default App;

