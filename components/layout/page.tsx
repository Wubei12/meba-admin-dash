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
            <div className={`${isSidebarOpen ? 'pl-14 flex-wrap max-sm:-z-10 max-sm:absolute' : "ml-8"} w-full`}>
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                {children}
            </div>
        </div>
    )
}

export default Layout