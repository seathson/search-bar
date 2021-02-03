import React from "react";

function Snow(props) {
  const sizeMin = 4;
  const sizeMax = 8;

  const posMin = 1;
  const posMax = 99;

  const durationMin = 10;
  const durationMax = 15;

  const delayMin = 0;
  const delayMax = 10;

  const blurMin = 1;
  const blurMax = 3;

  let content = [];

  for (let i = 0; i < 50; i++) {
    let size = Math.floor(sizeMin + Math.random() * (sizeMax - sizeMin));
    let blur = Math.floor(blurMin + Math.random() * (blurMax - blurMin));

    const snow_container_style = {
      left: Math.floor(posMin + Math.random() * (posMax - posMin)) + "%",
      animationDuration: Math.floor(durationMin + Math.random() * (durationMax - durationMin)) + "s",
      animationDelay: Math.floor(delayMin + Math.random() * (delayMax - delayMin)) + "s",
      filter: `blur(${blur}px)`,
    };

    const snow_style = {
      width: size + "px",
      height: size + "px",
    };

    content.push(
      <div key={i} className="snow_container" style={snow_container_style}>
        <div className="snow" style={snow_style}></div>
      </div>
    );
  }

  return content;
}

export default Snow;
