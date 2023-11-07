"use client"

import { useVerify } from "@/hooks";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export default function Setup() {
    // const [accessToken, setAccessToken] = useState<string | null>(null);

    // useEffect(() => {
    //     const jsonData = localStorage.getItem('tokens');

    //     if (jsonData !== null) {
    //         try {
    //             const parsedData: { data: { access_token: string } } = JSON.parse(jsonData);
    //             const token = parsedData.data.access_token;
    //             setAccessToken(token);
    //         } catch (error) {
    //             console.error('Error parsing JSON data:', error);
    //         }
    //     } else {
    //         console.error('No data found in localStorage for "tokens"');
    //     }
    // }, []);

    // useVerify(accessToken)

    return <ToastContainer />
}