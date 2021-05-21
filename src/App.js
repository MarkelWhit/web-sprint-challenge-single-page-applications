import React from "react";
import Pizza from './Assets/Pizza.jpg';
import { Link, Route, Switch } from 'react-router-dom'
import Form from './Form'
import { useState } from 'react'

  const initialOrders = [] ;
const initialFormValues = {
    /////NAME/////
    Name: '',
    ///DROPDOWN///
    Size:'',
    ///RADIO BUTTONS///
    Sauce:'',
    ///Checkboxes///
    Pepperoni: false,
    Sausage: false,
    CanadianBacon: false,
    SpicyItalianSausage: false,
    GrilledChicken: false,
    Onions: false,
    GreenPepper: false,
    DicedTomatoes: false,
    BlackOlives: false,
    RoastedGarlic: false,
    ArtichokeHearts: false,
    ThreeCheese: false, 
    Pineapple: false,
    ExtraCheese: false,
////COMMENTBOX///
    SpecialInstructions:"Anything else you'd like to add?",
}
const initialFormErrors = {
    Size:'',
    Sauce:'',
    SpecialInstructions:'',
}
function App() {
const initialDisabled = true;
const [order, setOrder] = useState(initialOrders)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const formSubmit = () => {
    const newOrder = {
        Name: formValues.Name.trim(),
        Size: formValues.Size.trim(),
        Sauce: formValues.Sauce.trim(),
        Toppings: ['Pepperoni','Sausage','Canadian Bacon','Spicy Italian Sausage','Grilled Chicken','Onions','Green Pepper','Diced Tomatos','Black Olives','Roasted Garlic','Artichoke Hearts','Three Cheese','Pineapple','Extra Cheese'].filter(topping => formValues[topping])
  
    } 
     setOrder(newOrder)
}
  return (
<div className='homepage'>
    <div className='header'>
      <h1>Lambda Eats</h1>
      <button>Home</button>
      <button>Help</button>
    </div>
    <div className='pizza'>
  
      <img src={Pizza} alt="Pizza"/>    
    
      <button id='order-pizza'> 
       <nav>
      <Link to="/pizza">Pizza</Link>
      </nav>
      </button>
    </div>
    
<Route exact path="/pizza" render={props =>{
    <Form 
  {...props}/>
  }}/>
    </div>
  );  
};
export default App;
