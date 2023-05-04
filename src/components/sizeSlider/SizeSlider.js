import { useState } from "react";
import "./SizeSlider.css"

function SizeSlider({setVolume}) {
  const [counter, setCounter] = useState(100) 
  const setNewValue = (e) => {
    setVolume(e.target.value * 0.01)
    setCounter(e.target.value)
  }
  

  return (
    <div className="rows_choose">
      <label htmlFor="rangeRows" className="form-label">
      </label>
      <div className="inputCont">
        <input type="range" className="form-range" min="0" max="100" id="rangeRows" value={counter} onInput={setNewValue} />
      </div> 
      <div className="counter">{counter}</div>
    </div>
  );
}

export default SizeSlider