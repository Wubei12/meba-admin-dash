import { Header } from '@/components/common'
import DonationsList from '@/components/data-grids/donationList'
import Layout from '@/components/layout/page'
import { Box } from '@mui/material'
import React from 'react'

export default function page() {
    return (
        <Layout>
            <Box>
                <Header title='DONATIONS' subtitle='View your available donations here.' />
            </Box>
            <DonationsList />
        </Layout>
    )
}

