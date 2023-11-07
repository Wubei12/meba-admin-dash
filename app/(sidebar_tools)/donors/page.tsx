import { Header } from '@/components/common'
import Layout from '@/components/layout/page'
import { Box } from '@mui/material'
import React from 'react'

export default function page() {
    return (
        <Layout>
            <div className='sm:ml-12 ml-8 mr-2 sm:mr-5'>
                <Box>
                    <Header title='DONORS' subtitle='view all your available donors here.' />
                </Box>
            </div>
        </Layout>
    )
}
