import { Header } from '@/components/common'
import Layout from '@/components/layout/page'
import { Box, Typography, useMediaQuery } from '@mui/material'
import CampaignList from '@/components/cards/CampaignList'
import React from 'react'

export default function page() {
    return (
        <Layout>
            <Box>
                <Header title='CAMPAIGNS' subtitle='view all your available campaigns here.' />
            </Box>
            <CampaignList />
        </Layout>
    )
}

