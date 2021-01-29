import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
import schema from "../validation/schema.js";

export default function OrderForm(props){


const { formValues, setFormValues, formErrors, setFormErrors, orders, setOrders, disabled, setDisabled, onSubmit }=props;

    const onChange=function(event){

        const { name, value, type, checked }=event.target;

        const valueToUse =type === "checkbox" ? checked : value;
        
        setFormValues({...formValues, [name]: valueToUse});

    }

    return (
        <PizzaOrder>
            <form onSubmit={onSubmit}>
                
                <label htmlFor="pizzaSize">Pizza Size:
                <select name="pizzaSize" type="dropdown" onChange={onChange} value={formValues.pizzaSize}>
                    <option value="">Choose A Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                </label>

            
                <label htmlFor="pizzaSauce">Original Sauce 
                    <input name="pizzaSauce" value="a" checked={formValues.pizzaSauce==="a"} type="radio" onChange={onChange} /> 
                </label>
                <label htmlFor="pizzaSauce">Garlic Sauce 
                    <input name="pizzaSauce" value="b" checked={formValues.pizzaSauce==="b"} type="radio" onChange={onChange} />
                </label>
          

                
                    <label htmlFor="toppingsPep">Pepperoni
                        <input type="checkbox" name="toppingsPep" checked={formValues.toppingsPep} onChange={onChange}  />
                    </label>

                    <label htmlFor="toppingsExtraCheese">Extra Cheese
                        <input type="checkbox" name="toppingsExtraCheese" checked={formValues.toppingsExtraCheese} onChange={onChange}  />
                    </label>

                    <label htmlFor="toppingsOlives">Olives
                        <input type="checkbox" name="toppingsOlives" checked={formValues.toppingsOlives} onChange={onChange}  />
                    </label>

                    <label htmlFor="toppingsOnions">Onions
                        <input type="checkbox" name="toppingsOnions" checked={formValues.toppingsOnions} onChange={onChange}  />
                    </label>

           
                

                <label htmlFor="pizzaInstructions">Special Instructions:
                    <input type="text" name="pizzaInstructions" value={formValues.pizzaInstructions} onChange={onChange} />
                </label>

                <button disabled={disabled}>Submit Order</button>
            </form>
            <OrderSection>
                {orders.map(function(orderItem){
                        return <p>1 {orderItem.pizzaSize}</p>
                })}
            </OrderSection>
        </PizzaOrder>
    )
}

const PizzaOrder=styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.8rem;
`

const OrderSection=styled.div`
padding: 1rem;
border: 1rem ridge white;
border-radius: 1rem;
`