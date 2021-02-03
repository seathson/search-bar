import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
  const [text, setText] = useState("");

  function handleClick(e) {
    let key = e.code;

    if (key === "Enter") {
      window.location.href = "https://yandex.ru/search/?text=" + text;
    } else if (e.type === "click") {
      window.location.href = "https://yandex.ru/search/?text=" + text;
    }
  }

  return (
    <div className={props.mode ? "search__container" : "search__container search__container_night"}>
      <div className="search__icon" onClick={handleClick}>
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <input
        className={props.mode ? "search__input" : "search__input search__input_night"}
        type="text"
        name="bar"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleClick}
      />

      <div className={text === '' ? 'search__cross search__cross_invisible' : 'search__cross'} onClick={() => setText('')}>
        <FontAwesomeIcon icon={faTimes}/>
      </div>
    </div>
  );
}

export default Search;
