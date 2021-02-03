import React, { useState } from "react";

function Svg(props) {
  const [time, setTime] = useState(null)

  function checkTime() {
    let timeNow = new Date().getTime()

    if (time + 1000 < timeNow) {
      setTime(timeNow)
      props.changeMode()
    }
  }

  return (
    <div>
      <svg
        viewBox="-6 -6 12 12"
        width="125"
        height="125"
        onClick={checkTime}
      >
        <defs>
          <mask id="mood">
            <circle cx="0" cy="0" r="5" fill="white"></circle>
            <circle
              cx={props.mode ? "10" : "3"}
              cy="0"
              r="5"
              style={{ transition: "1s" }}
            ></circle>
          </mask>
        </defs>

        <circle
          cx="0"
          cy="0"
          r="5"
          mask="url(#mood)"
          transform={props.mode ? "rotate(200)" : "rotate(-24)"}
          fill={props.mode ? "yellow" : "black"}
          style={{ transition: "1s" }}
        ></circle>
      </svg>
    </div>
  );
}

export default Svg;
