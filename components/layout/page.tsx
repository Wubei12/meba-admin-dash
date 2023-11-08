"use client"

import React, { useState } from 'react'
import { Navbar, Sidebar } from '../common';


type Props = {
    children: React.ReactNode;
}

function Layout({ children }: Props) {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
    return (
        <div className={"sm" ? "flex w-full h-screen fixed" : "block w-full h-screen fixed"}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <div className={`${isSidebarOpen ? 'w-full max-sm:-z-10 max-sm:absolute' : "w-full"}`}>
                <div className='sm:ml-12 ml-8 mr-2 sm:mr-5'>
                    <Navbar
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                    />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout