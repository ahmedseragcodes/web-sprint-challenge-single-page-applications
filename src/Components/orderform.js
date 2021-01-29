import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function OrderForm(props){


const { formValues, setFormValues, formErrors, setFormErrors, orders, setOrders, disabled, setDisabled, onSubmit }=props;

    const onChange=function(event){

        const { name, value, type, checked }=event.target;



    }

    return (
        <PizzaOrder>

        </PizzaOrder>
    )
}

const PizzaOrder=styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.8rem;
`