import React, { useState } from 'react'
import {Route, Link, Switch} from 'react-router-dom'

export default function pizzaForm(props) {
const {
    values,
    submit,
    change, 
    disabled,
    errors,
} = props

const onSubmit = evt =>{
    evt.preventDefault()
    submit()
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
            <label>Name
                <input
                value={values.name}
                onChange={onChange}
                name='Name'
                type='text'
                />
            </label>

        </div>
    </form>
)
}