import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function PizzaForm(props) {
const {
    values,
    submit,
    change, 
    disabled,
    errors,
} = props

const history = useHistory();
const routeToConfirm = () => {
    history.push('/confirmation')
}

const onSubmit = evt =>{
    evt.preventDefault()
    submit()
    routeToConfirm()
}
const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked :value
    change(name, valueToUse)
}

return (
    <form id='pizza-form' onSubmit={onSubmit}>
        <div id='name-input'>
            <h3>Create Your Order</h3>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
            </div>
            <label>Name
                <input
                value={values.name}
                onChange={onChange}
                name='Name'
                type='text'
                />
            </label><br/>
            <label>Size
                <select
                value={values.size}
                onChange={onChange}
                name='Size'>
                    <option value=''>- Select a size -</option>
                    <option value='9 inch'>9'</option>
                    <option value='10 inch'>10'</option>
                    <option value='12 inch'>12'</option>
                </select>
            </label>
            <br/>
            <label>Marinara
                <input
                type='radio'
                name='Sauce'
                value='marinara'
                onChange={onChange}
                checked={values.Sauce === 'marinara'}/>
            </label>
            <label>Alfredo
                <input
                type='radio'
                name='Sauce'
                value='alfredo'
                onChange={onChange}
                checked={values.Sauce === 'alfredo'}/>
            </label>
            <br/>
            <label>Pepperoni
                <input
                type='checkbox'
                name='Pepperoni'
                checked={values.Pepperoni}
                onChange={onChange}/>
            </label>

            <label>Sausage
                <input
                type='checkbox'
                name='Sausage'
                checked={values.Sausage}
                onChange={onChange}/>
            </label>
            <label>Canadian Bacon
                <input
                type='checkbox'
                name='CanadianBacon'
                checked={values.CanadianBacon}
                onChange={onChange}/>
            </label>
            <br/>
            <button disabled={disabled}>Submit Order</button>
            <br/>
        </div>
    </form>
)
}