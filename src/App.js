import React, { useEffect } from "react";
import Pizza from './Assets/Pizza.jpg';
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import Form from './Form'
import { useState } from 'react'
import schema from '../src/validation/formSchema'
import * as yup from 'yup'
import axios from "axios";
import PizzaOrder from "./OrderPizza";


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
const initialOrder = []
const initialDisabled = true;
function App() {

  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
      .then(res => {
        setOrder(res.data)
        console.log(order)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const postNewOrder = () => {
    axios.post('https://reqres.in/api/orders')
      .then(res => {
        setOrder([res.data, ...order])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const formSubmit = () => {
    const newOrder = {
      Name: formValues.Name.trim(),
      Size: formValues.Size.trim(),
      Sauce: formValues.Sauce.trim(),
      Toppings: ['Pepperoni', 'Sausage', 'Canadian Bacon'].filter(topping => formValues[topping])

    }
    postNewOrder(newOrder)
  }



  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const history = useHistory();
  const routeToOrder = () => {
    history.push('/pizza')
  }

  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className='homepage'>
      <Switch>
        <Route exact path='/pizza'>
          <Form
            values={formValues}
            submit={formSubmit}
            change={inputChange}
            disabled={disabled}
            errors={formErrors} />
        </Route>
      <Route exact path='/'>
      <div className='header'>
        <h1>Lambda Eats</h1>
        <button ><Link to='/'>Home</Link></button>
        <button>Help</button>
      </div>
      <div className='pizza'>

        <img src={Pizza} alt="Pizza" />


        <nav>
          <button onClick={routeToOrder} id='order-pizza' >Pizza</button>
        </nav>

      </div>
</Route>
     <Route exact path='/confirmation'>
       <PizzaOrder order={order}/>
       </Route>   
      </Switch>
    </div>
  );
};      
export default App;
