"use client"

import { AdminPanelSettingsOutlined, CalendarMonthOutlined, CampaignOutlined, ChevronLeft, ChevronRightOutlined, Groups2Outlined, HomeOutlined, PieChartOutlined, PointOfSaleOutlined, PublicOutlined, TodayOutlined, TrendingUpOutlined, VolunteerActivismOutlined } from '@mui/icons-material';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import logoImg from '@/public/images/logo.png'


type SideProps = {
    isSidebarOpen: boolean
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
    },
    {
        text: "Donor Facing",
        icon: null,
    },
    {
        text: "Campaigns",
        icon: <CampaignOutlined />,
    },
    {
        text: "Donors",
        icon: <Groups2Outlined />,
    },
    {
        text: "Donations",
        icon: <VolunteerActivismOutlined />,
    },
    {
        text: "Geography",
        icon: <PublicOutlined />,
    },
    {
        text: "Donations",
        icon: null,
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
    },
    {
        text: "Daily",
        icon: <TodayOutlined />,
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined />,
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />,
    },
    {
        text: "Management",
        icon: null,
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />,
    },
];

function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SideProps) {
    const pathname = usePathname();
    const [active, setActive] = useState("dashboard");
    const router = useRouter();
    return (
        <div className={`${isSidebarOpen ? "w-[250px] transform duration-500" : "w-0  duration-500"}`}>
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left">
                    <Box width="100%">

                        <Box className="max-sm:my-8 max-sm:m-0 " m="1.5rem 1.5rem 2rem 3rem">
                            <div className="meba-box__flex-between w-full text-[#fdcd49] dark:text-[#ffe3a3] bg-opacity-80 max-sm:px-4">
                                <Box display="flex" justifyContent="center" alignItems='center' gap="2rem" >
                                    <Image src={logoImg} alt='logo' width={30} height={30} />
                                    <Typography variant='h4' fontWeight="bold" >
                                        MEBA
                                    </Typography>
                                </Box>
                                <button className='sm:hidden flex' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft />
                                </button>
                            </div>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography className=' text-gray-950 dark:text-[#fff6e0]' key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                            {text}
                                        </Typography>
                                    )
                                }
                                const lcText = text.toLowerCase();

                                return (
                                    <ListItem className='group hover:bg-neutral-400/10' key={text} disablePadding>
                                        <ListItemButton onClick={() => {
                                            router.push(`/${lcText}`)
                                            setActive(lcText)
                                        }}
                                            className={`${active === lcText || lcText === "dashboard" ? "bg-[#ffe3a3] text-[#191F45] dark:hover:text-[#fff6e0]" : "bg-transparent  text-[#ffcd44] dark:text-[#fff6e0]"} hover:text-[#fff6e0]`}
                                        >
                                            <ListItemIcon className={`ml-8 ${active === lcText || lcText === "dashboard" ? "text-[#191F45] group-hover:text-[#fff6e0]" : "text-[#ffedc2] group-hover:text-[#fff6e0]"}`}>
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: "auto" }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                </Drawer>
            )
            }
        </div >
    )
}

export default Sidebar