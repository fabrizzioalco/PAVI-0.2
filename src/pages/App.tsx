import React from 'react';
import '../App.css';
import Forms from '../components/Forms'
import ReactPlayer from "react-player";
import VideoList from "../components/VideoList";

function App() {
    const video = "https://www.youtube.com/watch?v=HzPHfpmMitg";
  return (
    <div className="App">
      <header className="PAVI">
          <ReactPlayer url={video} />
          <Forms />
          <VideoList />
      </header>
    </div>
  );
}

export default App;
