"use client"

import { useRegister } from '@/hooks'
import React from 'react'
import { Form } from '.'

function RegisterForm() {

    const { full_name, email, phone_number, password1, password2, isLoading, onChange, onSubmit, } = useRegister()

    const config = [
        {
            labelText: "Full Name",
            labelId: "full_name",
            type: "text",
            value: full_name,
            required: true
        },
        {
            labelText: "Email Adress",
            labelId: "email",
            type: "email",
            value: email,
            required: true
        },
        {
            labelText: "Phone Number",
            labelId: "phone_number",
            type: "text",
            value: phone_number,
            required: true
        },
        {
            labelText: "Password",
            labelId: "password1",
            type: "password",
            value: password1,
            required: true
        },
        {
            labelText: "Confirm Your Password",
            labelId: "password2",
            type: "password",
            value: password2,
            required: true
        },
    ]
    return (
        <Form
            config={config} isLoading={isLoading} btnText="Sign up" onChange={onChange} onSubmit={onSubmit}
        />
    )
}

export default RegisterForm