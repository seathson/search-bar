import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeEffect } from "../../redux/actions";

function IconEffect(props) {
  const [time, setTime] = useState(null);
  const colorOn = "#4CD964";
  const colorOff = "#a3a3a3";
  const dispatch = useDispatch()

  function checkTime() {
    let timeNow = new Date().getTime();

    if (time + 500 < timeNow) {
      setTime(timeNow);
      dispatch(changeEffect())
    }
  }

  return (
    <div className='iconEffect'>
      <svg width="50" height="50" viewBox="0 0 12 12" onClick={checkTime}>
        <path
          className="st1"
          fill={props.effect ? colorOn : colorOff}
          style={{ transition: ".5s", transitionProperty: 'fill'}}
          d="M9.06,8.74H2.94C1.43,8.74,0.2,7.51,0.2,6v0c0-1.51,1.23-2.74,2.74-2.74h6.12c1.51,0,2.74,1.23,2.74,2.74v0
        C11.8,7.51,10.57,8.74,9.06,8.74z"
        />

        <circle
          className="st0"
          cx={props.effect ? "9.06" : "2.94"}
          cy="6"
          r="2.35"
          fill="white"
          style={{ transition: ".5s", transitionProperty: 'cx'}}
        />
      </svg>
    </div>
  );
}

export default IconEffect;