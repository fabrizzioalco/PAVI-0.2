import React from 'react';
import './App.css';
import { Container, Box } from "@material-ui/core";
import Chart from './Components/Chart'
import ReactPlayer from "react-player";
import {makeStyles} from "@material-ui/core/styles";

function App() {
    let video: string = "https://www.youtube.com/watch?v=oSk3NMZCsv0";


  return (
    <div className="App">
      <Container>
          <Box display="flex">
            <Box display="flex">
                <ReactPlayer
                 url={video}
                 loop={true}
                 playing
                />
            </Box>
            <Box display="flex">
            </Box>
          </Box>
      </Container>
    </div>
  );
}

export default App;


const useStyle = makeStyles({
    Box:{
        aligItems: ""
    }
})