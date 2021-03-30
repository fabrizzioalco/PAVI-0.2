import React from 'react'
import axios from 'axios'
import { Typography } from '@material-ui/core';

const Videos = () => {
    axios.defaults.baseURL ="127.0.0.1:8001";
    // const getData = () => {
    //     axios.get('http://127.0.0.1:8001/results/0a0692e6-63e4-11eb-a663-51115c07f023')
    //         .then((e) => console.log("This is a succes" + e))
    //         .then((error) => console.log("This is an error:" + error))
    // }
    const video = ["video 1", "video 2", "video 3", "video 4", "video 5", "video 6"];
     const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": "*"
    };
    return (
        <div>
            <Typography>
                {axios.get('http://127.0.0.1:8001/results/0a0692e6-63e4-11eb-a663-51115c07f023', {headers})
                    .then((e) => console.log("This is a succes" + e))
                    .then((error) => console.log("This is an error:" + error))}
            </Typography>
        </div>
    )
}


export default Videos;