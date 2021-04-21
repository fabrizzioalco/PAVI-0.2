import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import ReactPlayer from "react-player";
import {makeStyles} from "@material-ui/core/styles";
import SideBar from "./Components/SideBar";
import Videos from "./Components/VideoList";

function App() {
    let video: string = "https://www.youtube.com/watch?v=oSk3NMZCsv0";
    const classes = useStyle();

  return (
    <Grid container className="App" spacing={10} justify="center">
            <Grid item >
                <SideBar />
            </Grid>
            <Grid item  id="video">
                <ReactPlayer url={video} loop />
            </Grid>
            <Grid item>
                <Videos />
            </Grid>
    </Grid>
  );
}
// {
//
//     <Grid item>

//     </Grid>
//     <Grid item>
//         <Forms2 />
//     </Grid>
// }

export default App;


const useStyle = makeStyles({
    Box:{
        marginTop: 30,
        justifyContent: "space-between"
    },
    root: {
        flexGrow: 1,
    },
    GridContainer:{
        justify: "start",
        spacing:10,

    }
})
