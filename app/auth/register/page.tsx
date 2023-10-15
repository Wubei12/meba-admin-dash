"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react'
import bgImg from '@/public/images/bg-landing.jpg'
import bgImg1 from '@/public/images/bg-landing1.jpeg'
import bgImg2 from '@/public/images/bg-landing2.jpeg'
import bgImg3 from '@/public/images/bg-landing3.jpeg'
import bgImg4 from '@/public/images/bg-landing4.jpeg'
import logoImg from '@/public/images/logo.png'
import bgImg6 from '@/public/images/bg-landing6.jpeg'
import Image from 'next/image';
import { useRegisterMutation } from '@/redux/features/authApiSlice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Spinner from '@/components/common/Spinner'



function Page() {

    const router = useRouter()

    const [register, { isLoading }] = useRegisterMutation();

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        password1: "",
        password2: ""
    })

    const { full_name, email, phone_number, password1, password2 } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        register({ full_name, email, phone_number, password1, password2 }).unwrap().then(() => {
            toast.success("Please check email to verify account")
            router.push("/auth/login")
        }).catch(() => {
            toast.error("Failed to register account")

        })
    }

    return (
        <div className='flex relative items-center max-lg:justify-center overflow-x-hidden h-screen mx-auto'>
            <div className='absolute w-full h-full'>
                <div className='flex relative w-full h-full'>
                    <div className='absolute flex w-full h-full bg-black/50 z-10' />
                    <Image src={bgImg4} objectFit='contain' width={700} height={810} alt="" />
                    {/* <div className='absolute w-[6.5rem] h-screen justify-center shadow-2xl shadow-black z-10'></div> */}
                    <Image src={bgImg3} objectFit='contain' width={700} height={810} alt="" />
                    <Image src={bgImg6} objectFit='contain' width={700} height={810} alt="" />
                </div>
            </div>
            <div className="flex absolute items-center bg-white z-20 lg:right-0 rounded-xl w-full max-w-sm md:max-w-2xl shadow-2xl md:mx-8 flex-1 flex-col justify-center md:py-10 md:my-0 my-4 py-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        className="mx-auto h-24 w-auto"
                        src={logoImg}
                        alt="Meba"
                    />
                    <h2 className="mt-10 text-center text-[#fdcd49] text-2xl font-bold leading-9 tracking-tight">
                        Sign up for an account
                    </h2>
                    <p className="mt-4 text-gray-500 text-center dark:text-gray-400">
                        Let’s get you all set up.
                    </p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="full_name"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6  transition duration-300"
                                    name="full_name"
                                    type="text"
                                    value={full_name}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6  transition duration-300"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone_number"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300"
                                    name="phone_number"
                                    type="string"
                                    autoComplete="number"
                                    value={phone_number}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password1" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password1"
                                    name="password1"
                                    type="password"
                                    value={password1}
                                    onChange={onChange}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6  transition duration-300"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password2" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Your Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password2"
                                    name="password2"
                                    type="password"
                                    value={password2}
                                    onChange={onChange}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6 transition duration-300"
                                />
                            </div>
                            <div className='mt-2' />
                        </div>



                        <div>
                            <button
                                type="submit"
                                className="flex w-full shadow-xl justify-center rounded-md bg-[#fdcd49] items-center px-3 py-3 text-[16px] font-semibold leading-6 text-gray-700 hover:bg-[#fdd35d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-110 focus-visible:outline-[#fdd35d] transition duration-200"
                            >
                                {
                                    isLoading ? <Spinner sm /> : "Signup"
                                }
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="/auth/login" className="font-semibold leading-6 text-[#f2b202] hover:text-[#fdbd0d] transition duration-200">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page