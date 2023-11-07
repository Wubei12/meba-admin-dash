"use client"

import React from 'react'
import { motion } from "framer-motion";

function HomeBody() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='absolute text-[#fdcd49] w-full h-full top-0 bottom-0 flex flex-col items-center justify-center'>
            <h1 className=' text-center text-6xl leading-[5rem] mb-10 font-bold'>Welcome to <br /> The Admin Dashboard!</h1>

            <p className='font-medium text-xl'>Please Login or Register to get started.</p>
        </motion.div>
    )
}

export default HomeBody