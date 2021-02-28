import React from "react";
import Search from "../components/search/Search";
import BackgroundDay from "../assets/imgs/day.jpg";
import BackgroundNight from "../assets/imgs/night.png";
import { useSelector } from "react-redux";

function Home() {
  const mode = useSelector(state => state.theme.light)
  const effect = useSelector(state => state.effect.snow)

  const day = {
    background: `url(${BackgroundDay})`,
    transition: "1s",
  };

  const night = {
    background: `url(${BackgroundNight})`,
    transition: "1s",
  };

  return (
    <div className="container" style={mode ? day : night}>
      <div className="search">
        <h1>Search</h1>
        <Search  mode={mode} effect={effect} />
      </div>
    </div>
  );
}

export default Home;
