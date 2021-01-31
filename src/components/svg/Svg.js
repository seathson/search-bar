import React, { useState } from "react";

function Svg(props) {
  const [state, setState] = useState(true);

  function changeMode(e) {
    setState(!state);
  }

  return (
    <div>
      <svg
        viewBox="-6 -6 12 12"
        width="125"
        height="125"
        onClick={changeMode}
      >
        <defs>
          <mask id="mood">
            <circle cx="0" cy="0" r="5" fill="white"></circle>
            <circle
              cx={state ? "3" : "10"}
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
          transform={state ? "rotate(-24)" : "rotate(200)"}
          fill={state ? "black" : "yellow"}
          style={{ transition: "1s" }}
        ></circle>
      </svg>
    </div>
  );
}

export default Svg;
