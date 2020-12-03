import {
     Container,
    createStyles,
    Drawer,
    Theme,
} from '@material-ui/core';
import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Forms from "./common/Forms 2";
import Logo from "../Component 1.png"


const SideBar = () =>{

    const classes = useStyles();
    return(
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Container className={classes.container}>
                    <img src={Logo}  alt="logo"/>
                    <Forms />
                </Container>

            </Drawer>

    )
}

export default SideBar;


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            backgroundColor: '#5D6067'
        },
        drawer: {
            width: 300,
            flexShrink: 0,
        },
        drawerPaper: {
            width: 300,
            backgroundColor: '#5D6067'
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: '#5D6067',
            padding: theme.spacing(3),
        },
        container:{
            width:250

        }    }),
);