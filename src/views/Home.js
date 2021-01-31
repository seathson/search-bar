import React from "react";
import Search from "../components/search/Search";
import Svg from "../components/svg/Svg";

function Home() {
  return (
    <div className='search'>
      <h1>Search</h1>
      <Search />
      <Svg/>
    </div>
  );
}

export default Home;
