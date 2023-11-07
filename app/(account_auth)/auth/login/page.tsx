import React, { ChangeEvent, FormEvent, useState } from 'react'
import bgImg3 from '@/public/images/bg-landing3.jpeg'
import bgImg4 from '@/public/images/bg-landing4.jpeg'
import logoImg from '@/public/images/logo.png'
import bgImg6 from '@/public/images/bg-landing6.jpeg'
import Image from 'next/image';
import { LoginForm, RegisterForm } from '@/components/forms'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Meba | Login",
    description: "Let's get you signed in."
}

function Page() {
    return (
        <div className='flex relative items-center max-lg:justify-center overflow-x-hidden h-screen mx-auto'>
            <div className='absolute w-full h-full'>
                <div className='flex relative w-full h-full'>
                    <div className='absolute flex w-full h-full bg-black/50 z-10' />
                    <Image src={bgImg4} objectFit='contain' width={700} height={810} alt="bgImg4" />
                    {/* <div className='absolute w-[6.5rem] h-screen justify-center shadow-2xl shadow-black z-10'></div> */}
                    <Image src={bgImg3} objectFit='contain' width={700} height={810} alt="bgImg3" />
                    <Image src={bgImg6} objectFit='contain' width={700} height={810} alt="bgImg6" />
                </div>
            </div>
            <div className="flex absolute items-center bg-white z-20 lg:right-0 rounded-xl w-full max-w-sm md:max-w-xl shadow-2xl md:mx-8 flex-1 flex-col justify-center md:py-[5rem] md:my-0 my-4 py-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        className="mx-auto h-20 w-auto"
                        src={logoImg}
                        alt="logo"
                    />
                    <h2 className="mt-10 text-center text-[#fdcd49] text-2xl font-bold leading-9 tracking-tight">
                        Sign In
                    </h2>
                    <p className="mt-4 text-gray-500 text-center mx-2 dark:text-gray-400">
                        Welcome, Please provide all the information to login
                    </p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <LoginForm />


                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have an account?{' '}
                        <a href="/auth/register" className="font-semibold leading-6 text-[#f2b202] hover:text-[#fdbd0d] transition duration-200">
                            Register here.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page