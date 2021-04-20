import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography } from '@material-ui/core';
import { getJSDocAugmentsTag } from 'typescript';

const Videos = () => {
    // axios.defaults.baseURL = "127.0.0.1:8001";
    const [data, setData] = useState(undefined)
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": "*"
    }

    useEffect(()=>{
        axios.get('https://127.0.0.1:8001/results/0a0692e6-63e4-11eb-a663-51115c07f023', { headers })
        .then(response => {
            setData(response.data)
            alert("Success" + data)
        })
        .catch(error => alert(error))
    )})
    // function getData() {

    //     console.log("Im able to access here")
    //     axios.get('https://127.0.0.1:8001/results/0a0692e6-63e4-11eb-a663-51115c07f023', { headers })
    //         .then(response => {
    //             setData(response.data)
    //             alert("Success" + data)
    //         })
    //         .catch(error => alert(error))
    //     return "I can get here"
    // }
    return (
        <div>
            {data.map((item)=> <Typography>{item}</Typography>)}
        </div>
    )
}


export default Videos;