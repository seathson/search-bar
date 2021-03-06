import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../redux/actions";
import { animated, useSpring } from "react-spring";

function IconMode(props) {
  const [time, setTime] = useState(null);
  const dispatch = useDispatch();

  const animPath = useSpring({
    d: props.mode
      ? "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z"
      : "M3.5 6C3.5 9.31371 6 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C6 0 3.5 2.68629 3.5 6Z",
    fill: props.mode ? '#ffdd00' : '#663ecf'
  });

  const animSvg = useSpring({
    delay: props.mode ? 700 : 300,
    transform: props.mode ? 'rotate(0deg)' : 'rotate(320deg)',
  })

  function checkTime() {
    let timeNow = new Date().getTime();

    if (time + 1000 < timeNow) {
      setTime(timeNow);
      dispatch(changeTheme());
    }
  }

  return (
    <div className="iconMode">
      <animated.svg
        className="iconMode"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="200px"
        height="200px"
        viewBox="-0.5 -0.5 13 13"
        fill="none"
        onClick={() => checkTime()}
        style={animSvg}
      >
        <animated.path d={animPath.d} fill={animPath.fill} />
      </animated.svg>
    </div>
  );
}

export default IconMode;
