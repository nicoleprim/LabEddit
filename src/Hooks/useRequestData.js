import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


export function useRequestData(initialData, url, refresh) {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        axios.get(url, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, [url, refresh])
    return ( data )
}