import React from "react";
import Pizza from './Assets/Pizza.jpg';
import { Link, Route, Switch } from 'react-router-dom'
import Form from './Form'
import { useState } from 'react'


const initialFormValues = {
  /////NAME/////
  Name: '',
  ///DROPDOWN///
  Size: '',
  ///RADIO BUTTONS///
  Sauce: '',
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
  SpecialInstructions: "Anything else you'd like to add?",
}
const initialFormErrors = {
  Size: '',
  Sauce: '',
  SpecialInstructions: '',
}
const initialOrders = []
const initialDisabled = true;
function App() {

  const [order, setOrder] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const formSubmit = () => {
    const newOrder = {
      Name: formValues.Name.trim(),
      Size: formValues.Size.trim(),
      Sauce: formValues.Sauce.trim(),
      Toppings: ['Pepperoni', 'Sausage', 'Canadian Bacon', 'Spicy Italian Sausage', 'Grilled Chicken', 'Onions', 'Green Pepper', 'Diced Tomatos', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese', 'Pineapple', 'Extra Cheese'].filter(topping => formValues[topping])

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

        <img src={Pizza} alt="Pizza" />


        <nav>
          <Link to="/pizza"><button id='order-pizza'>Pizza</button>
          </Link>
        </nav>

      </div>

      <Route exact path="/pizza">
        <Form
          values={formValues}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors} />
      </Route>
    </div>
  );
};
export default App;
