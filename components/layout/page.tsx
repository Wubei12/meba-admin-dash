"use client"

import React, { useState } from 'react'
import { Navbar, Sidebar } from '../common';
import { Box, useMediaQuery } from '@mui/material';



type Props = {
    children: React.ReactNode;
}

function Layout({ children }: Props) {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
    return (
        <div className={"sm" ? "flex w-full h-screen" : "block w-full h-screen"}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <div className={`${isSidebarOpen ? 'w-full max-sm:-z-10 max-sm:absolute' : "w-full"}`}>
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