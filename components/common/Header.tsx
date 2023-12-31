import { Box, Typography } from '@mui/material'
import React from 'react'

interface HeaderProps {
    title: string;
    subtitle: string;
}


export default function Header({ title, subtitle }: HeaderProps) {
    return (
        <Box>
            <Typography variant='h2' className='dark:text-[#fff6e0] text-[#fdcd49] font-bold mb-[5px]'>
                {title}
            </Typography>
            <Typography variant='h5' className='dark:text-[#fff6e0] text-[#fdcd49]'>
                {subtitle}
            </Typography>
        </Box>
    )
}

