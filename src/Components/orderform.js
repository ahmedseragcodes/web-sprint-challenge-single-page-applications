import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

            
                <label htmlFor="originalSauce">Original Sauce 
                    <input name="originalSauce" value="original" checked={formValues.pizzaSauce==="original"} type="radio" onChange={onChange} /> 
                </label>
                <label htmlFor="garlicSauce">Garlic Sauce 
                    <input name="garlicSauce" value="garlic" checked={formValues.pizzaSauce==="garlic"} type="radio" onChange={onChange} />
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
        </PizzaOrder>
    )
}

const PizzaOrder=styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.8rem;
`