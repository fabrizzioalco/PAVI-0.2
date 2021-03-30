import React, {FunctionComponent, useState} from "react";
import {
    Box,
    Button, Card, CardContent,
    createStyles,
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Theme, Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const Forms: FunctionComponent= () =>{
    const classes = useStyles();
    const [algorithm, setAlgorithm] = useState('YOLOv3');
    const [videoFile, setVideoFile]= React.useState<any>("Select video");
    const [configFile, setConfigFile] = React.useState<any>("Select configuration file")
    const handleAlgorithmChange = (event: React.ChangeEvent<{ value: any }>)=>{
        setAlgorithm(event.target.value);
    }
    const handleVideoFileChange=(event: React.ChangeEvent<{ value:any }>)=>{
        setVideoFile(event.target.value)
    }
    const handleConfigFile = (event: React.ChangeEvent<{value: unknown}>)=>{
        setConfigFile(event.target.value)
    }

    return(
        <>
                <Grid className={classes.grid} container spacing={3}>
                    <Grid item >
                        <FormControl variant="outlined" className={classes.formControl} >
                            <InputLabel id="demo-simple-select-outlined-label" className={classes.text}>Algorithm</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={algorithm}
                                onChange={handleAlgorithmChange}
                                label="Algorithm"
                                className={classes.text}
                            >
                                <MenuItem value={20}> YOLOv3</MenuItem>
                                <MenuItem value={10} >Pedestrian tracker</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Box display="flex">
                            <input type="file"
                                   id="videoFileUpload"
                                   style={{ display: 'none' }}
                                   onChange={handleVideoFileChange}
                            />
                            <label htmlFor={'videoFileUpload'}>
                                <Button
                                    variant="contained"
                                    component="span"
                                    className={classes.button}
                                >
                                    <Typography variant="caption">Upload</Typography>
                                </Button>
                            </label>
                            <Card className={classes.card} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.typography} >{videoFile}</Typography>
                                </CardContent>
                            </Card>

                        </Box>
                    </Grid>
                </Grid>
        </>
    )

}

export default Forms;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            root: {
                display: 'flex',
                backgroundColor: '#EEEDE7'
            },
            text: {
                color:'#EEEDE7'
            },
            formControl:{
                minWidth:200,
                margin:10
            },
            card:{
                backgroundColor:'#5D6067',
                width:150,
                variant:"outlined",
                height:40
            },
            cardContent:{
                backgroundColor:'#5D6067',
                width:150,
                variant:"outlined",
                height:40
            },
            typography:{
                color:'#EEEDE7',
                fontSize: 14
            },
            button:{
                height:40
            },
            grid:{
                width:250
            }



        }
    ),
);