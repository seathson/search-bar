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
    <div className="search__container">
      <div className="search__icon" onClick={handleClick}>
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <input
        className="search__input"
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
