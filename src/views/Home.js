import React, { useState } from "react";
import Search from "../components/search/Search";
import Icon from "../components/icon/Icon";
import BackgroundDay from "../assets/imgs/day.jpg";
import BackgroundNight from "../assets/imgs/night.png";

function Home() {
  const [mode, setMode] = useState(true);

  function changeMode() {
    setMode(!mode);
  }

  const day = {
    backgroundImage: `url(${BackgroundDay})`,
    transition: "1s",
  };

  const night = {
    backgroundImage: `url(${BackgroundNight})`,
    transition: "1s",
  };

  return (
    <div className="container" style={mode ? day : night}>
      <div className="search">
        <h1>Search</h1>
        <Search mode={mode}/>
        <Icon changeMode={changeMode} mode={mode}/>
      </div>
    </div>
  );
}

export default Home;
