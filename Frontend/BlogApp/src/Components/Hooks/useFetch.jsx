import React, { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    async function getData(url){
        setLoading(true)
        const response=await fetch(url)
        const response_json=await response.json()
        setData(response_json)
        setLoading(false)
    }
    useEffect(()=>{
        getData(url)
    },[url])
    return {data,loading}
}
