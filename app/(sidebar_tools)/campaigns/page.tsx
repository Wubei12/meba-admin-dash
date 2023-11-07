import CampaignList from '@/components/cards/CampaignList'
import { Header } from '@/components/common'
import Layout from '@/components/layout/page'
import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

export default function page() {



    return (
        <Layout>
            <div className='sm:ml-12 ml-8 mr-2 sm:mr-5'>
                <Box>
                    <Header title='CAMPAIGNS' subtitle='view all your available campaigns here.' />
                </Box>
                <CampaignList />
            </div>
        </Layout>
    )
}

