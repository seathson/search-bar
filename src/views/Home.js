import React from "react";
import Search from "../components/search/Search";
import { useSelector } from "react-redux";

function Home() {
  const mode = useSelector(state => state.theme.light)
  const effect = useSelector(state => state.effect.snow)

  return (
    <div className={mode ? 'container' : 'container container_night'}>
      <div className="search">
        <h1 className={mode ? 'search__title' : 'search__title search__title_night'}>Search</h1>
        <Search  mode={mode} effect={effect} />
      </div>
    </div>
  );
}

export default Home;
