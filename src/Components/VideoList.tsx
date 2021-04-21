import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const Videos = () => {
    // axios.defaults.baseURL = "127.0.0.1:8001";
    const [data, setData] = useState<any[]>([])
   
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8001/results/0a0692e6-63e4-11eb-a663-51115c07f023')
            .then(response => {
                setData(response.data.processing[0].detections)
                // alert("Success" + data)
            })
            .catch(error => alert(error))
    }, [])

    console.log(data)
    const classes = useStyles();
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Frames</TableCell>
                            <TableCell align="right">Cars</TableCell>
                            <TableCell align="right">Persons</TableCell>
                            <TableCell align="right">Seconds</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row): any => (
                            <TableRow key={row.frame}>
                                <TableCell component="th" scope="row">
                                    {row.frame}
                                </TableCell>
                                <TableCell align="right">{row.objects.cars}</TableCell>
                                <TableCell align="right">hey</TableCell>
                                <TableCell align="right">{row.seconds}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


export default Videos;
