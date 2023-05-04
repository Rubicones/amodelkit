import "./App.css";
import intpVoc from '../../../src/resourses/audio/intpVoc.mp3'
import intpDrums from '../../../src/resourses/audio/intpDrums.mp3'
import intpOther from '../../../src/resourses/audio/intpOther.mp3'
import intpBass from '../../../src/resourses/audio/intpBass.mp3'

import SizeSlider from "../sizeSlider/SizeSlider";
import React, { useRef, useEffect, useState } from "react";

function App() {
  const [track1, setTrack1] = useState(new Audio(intpBass))
  const [track2, setTrack2] = useState(new Audio(intpDrums))
  const [track3, setTrack3] = useState(new Audio(intpVoc))
  const [track4, setTrack4] = useState(new Audio(intpOther))


  const setVolume1 = (volume) => {
    track1.volume = volume
  }
  const setVolume2 = (volume) => {
    track2.volume = volume
  }
  const setVolume3 = (volume) => {
    track3.volume = volume
  }
  const setVolume4 = (volume) => {
    track4.volume = volume
  }
  
  const play = () => {
    track1.play()
    track2.play()
    track3.play()
    track4.play()
  }
  

    return (
        <>
        <div className="container">
          <button className="play" onClick={play}>Play</button>
          <SizeSlider setVolume={(volume) => {setVolume1(volume)}}/>
          <SizeSlider setVolume={(volume) => {setVolume2(volume)}}/>
          <SizeSlider setVolume={(volume) => {setVolume3(volume)}}/>
          <SizeSlider setVolume={(volume) => {setVolume4(volume)}}/>

        </div>
        </>
    );
}

export default App;
