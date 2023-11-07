"use client"

import React from 'react'
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoImg from '@/public/images/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout as setLogout } from '@/redux/features/auth/authSlice';
import { useLogoutMutation } from '@/redux/features/auth/authApiSlice';
import { usePathname, useRouter } from 'next/navigation';
import { NavLink } from './common';



function HomeNav() {
    const router = useRouter();

    const pathname = usePathname();

    const dispatch = useAppDispatch();

    const [logout] = useLogoutMutation();

    const { isAuthenticated } = useAppSelector(state => state.auth);

    const handleLogout = () => {
        logout(undefined)
            .unwrap()
            .then(() => {
                dispatch(setLogout());
            })
            .finally(() => {
                router.push("/")
            })
    }

    console.log(isAuthenticated)
    const isSelected = (path: string) => pathname === path ? true : false;

    const authLinks = (isMobile: boolean) => (
        <>
            <NavLink isSelected={isSelected('/dashboard')} isMobile={isMobile} href='/dashboard'>Dashboard</NavLink>
            <NavLink isMobile={isMobile} onClick={handleLogout}>Logout</NavLink>
        </>
    )

    const guestLinks = (isMobile: boolean) => (
        <>
            <NavLink isSelected={isSelected('/auth/login')} isMobile={isMobile} href='/auth/login'>Login</NavLink>
            <NavLink isSelected={isSelected('/auth/register')} isMobile={isMobile} href='/auth/register'>Register</NavLink>
        </>
    )

    return (
        <Disclosure as="nav" className="z-10 bg-transparent w-full top-0 absolute text-2xl shadow-2xl sm:mb-12">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex  bg-transparent items-center justify-center rounded-md p-2 text-white hover:bg-[#ffcd44] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-between sm:items-stretch">
                                <div className="flex items-center text-[#fdcd49] dark:text-[#ffe3a3]">
                                    <Link href='/' className='flex gap-4'>
                                        <Image src={logoImg} alt='logo' width={30} height={30} />
                                        <Typography variant='h4' fontWeight="bold" >
                                            MEBA
                                        </Typography>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex text-[#fdcd49] dark:text-[#ffe3a3] gap-6">
                                        {isAuthenticated ? authLinks(false) : guestLinks(false)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 text-[#fdcd49] hover:text-[#f0f0f0] dark:text-[#ffe3a3] flex gap-6 px-2 pb-3 pt-2">
                            {isAuthenticated ? authLinks(true) : guestLinks(true)}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default HomeNav