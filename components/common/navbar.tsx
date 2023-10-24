import React from 'react'
import { Menu as MenuIcon, Search, SettingsOutlined } from "@mui/icons-material";


type NavProps = {
    isSidebarOpen: boolean
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

function Navbar({ isSidebarOpen, setIsSidebarOpen }: NavProps) {
    return (
        <nav className={`${isSidebarOpen ? 'w-full flex justify-between items-center h-[80px] sm:h-[98.19px]' : 'w-full flex justify-between items-center h-[80px] sm:h-[98.19px]'}`} >
            <div className='meba-box__flex-between'>
                <div className='flex sm:ml-16 ml-10 mr-5 sm:mr-5 items-center justify-center'>
                    <button className=' hover:bg-neutral-300/90 active:scale-110  dark:hover:bg-neutral-500/80  text-center p-[0.5rem] fixed transition border-gray hover:outline-none rounded-full' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </button>
                </div>
                <div className='relative meba-box__flex-between dark:bg-[#21295c] bg-gray-200  rounded-[6px] gap-12 py-[0.1rem]'>
                    <input className='dark:bg-[#21295c] bg-transparent w-full border-none outline-none focus:border-none  pr-12 focus:ring-2 focus:ring-inset focus:ring-transparent sm:leading-6  transition duration-300 items-center' type='text' placeholder='Search...' />
                    <button className='absolute right-2'>
                        <Search />
                    </button>
                </div>
            </div>
            <div className='meba-box__flex-between gap-6 sm:mx-6'>
                <button className='dark:hover:bg-neutral-500/90 active:scale-110 rounded-full transition text-center p-[0.5rem]'>
                    <SettingsOutlined sx={{ fontSize: "25px" }} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar