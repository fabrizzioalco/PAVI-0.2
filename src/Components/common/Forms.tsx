import React, {useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";




export const Forms = () =>{
    const classes = useStyles();
    const [ algorithm, setAlgorithm ] = useState("")
    const algorithms = ["YOLOv3", "Pedestrian tracker"];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, algorithm: string) =>{
        setAlgorithm(algorithm)
    }
    return(
        <>
            <form className={classes.root} noValidate autoComplete="off">

                <TextField id="outlined-basic" label="" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);