"use client"

import React, { useCallback, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { DonationProps, DonationPropsResponse, useRetrieveDonationsQuery } from '@/redux/features/donations/donationsSlice'
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Spinner } from '../common';




export default function DonationsList() {

    const { data, isLoading, refetch, isError } = useRetrieveDonationsQuery();
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});

    const fetchNextPage = useCallback(() => {
        if (data?.next) {
            refetch();
        }
    }, [data, refetch]);

    const processDataFromDjango = (dataFromDjango: DonationPropsResponse | any) => {
        if (!dataFromDjango || !Array.isArray(dataFromDjango)) {
            return [];
        }

        return dataFromDjango.map(item => ({
            id: uuidv4(), // Generating a unique identifier for each item
            ...item, // Spread the original data fields
        }));
    };

    const rows = processDataFromDjango(data)
    console.log(rows)

    if (isLoading) {
        return <Typography className='flex text-lg gap-4 items-center mt-2'>Loading <Spinner sm /></Typography>;
    }

    if (isError) {
        return <Typography>Error fetching data</Typography>;
    }

    const columns: GridColDef[] = [
        {
            field: "id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "campaign",
            headerName: "Campaign",
            flex: 1,
        },
        {
            field: "transactionNumber",
            headerName: "Transaction Number",
            flex: 1,
        },
        {
            field: "donor",
            headerName: "Donor",
            flex: 1,
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 0.5,
            sortable: false,
            // renderCell: (params: string) => `${Number(params).toFixed(2)}`,
        },
        {
            field: "tip",
            headerName: "Tip",
            flex: 1,
            // renderCell: (params: number) => `${Number(params.valueOf).toFixed(2)}`,
        },
        {
            field: "currency",
            headerName: "Currency",
            flex: 1,
        },
        {
            field: "anonymous",
            headerName: "Anonymous",
            flex: 1,
        },
        {
            field: "paymentMethod",
            headerName: "Payment Method",
            flex: 1,
        },
        {
            field: "paymentStatus",
            headerName: "Payment Status",
            flex: 1,
        },
        {
            field: "note",
            headerName: "Note",
            flex: 1,
        },
    ];

    return (
        <div className='w-full sm:mt-5'>
            <Box
                height="68vh" className="donations__dataGrid">
                <DataGrid
                    loading={isLoading || !data}
                    // getRowId={data?.count}
                    rows={rows || []}
                    columns={columns}
                    rowCount={(data?.results && data?.count) || 0}
                    // rowsPerPageOptions={[20, 50, 100]}
                    pagination
                // onPageChange={fetchNextPage}
                />
            </Box>
        </div>
    )
}
