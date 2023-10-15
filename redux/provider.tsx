"use client"

import React from 'react'
import { makeStore } from './store'
import { Provider } from 'react-redux'

type CustomProviderProps = {
    children: React.ReactNode
}

function CustomProvider({ children }: CustomProviderProps) {

    return (
        <Provider store={makeStore()}>{children}</Provider>
    )
}

export default CustomProvider