"use client"

import React from 'react'
import { Form } from '.'
import { useLogin } from '@/hooks'

function LoginForm() {

    const { email, password, isLoading, onChange, onSubmit } = useLogin();
    const config = [
        {
            labelText: "Email Adress",
            labelId: "email",
            type: "email",
            value: email,
            required: true
        },
        {
            labelText: "Password",
            labelId: "password",
            type: "password",
            value: password,
            link: {
                linkText: "Forgot Password?",
                linkUrl: "/password-reset/",
            },
            required: true
        }
    ]
    return (
        <Form
            config={config} isLoading={isLoading} btnText="Sign In" onChange={onChange} onSubmit={onSubmit}
        />
    )
}

export default LoginForm