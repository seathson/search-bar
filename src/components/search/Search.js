import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import IconMode from '../iconState/IconMode'
import IconEffect from "../iconState/IconEffect";

function Search(props) {
  const [text, setText] = useState("");
  const [input, setInput] = useState(false)
  
  const menuItems = [
    { id: 1, text: 'Theme', change: <IconMode mode={props.mode}/> },
    { id: 2, text: 'Effects', change: <IconEffect effect={props.effect}/> },
  ]

  function handleClick(e) {
    let key = e.code;

    if (key === "Enter" || e.type === "click") {
      if (text !== '')
        window.location.href = "https://www.google.com/search?q=" + text
      else
        setInput(true)
    }
  }

  return (
    <div className={props.mode ? "search__container" : "search__container search__container_night"}>
      <div className="search__icon" onClick={handleClick}>
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <input
        placeholder='Enter your request'
        className={
          input
            ? props.mode
              ? "search__input search__input_empty"
              : "search__input search__input_night search__input_empty"
            : props.mode
              ? "search__input"
              : "search__input search__input_night"
            }
        type="text"
        name="bar"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          setInput(false)
        }}
        onKeyPress={handleClick}
      />

      <div className={text === '' ? 'search__cross search__cross_invisible' : 'search__cross'} onClick={() => setText('')}>
        <FontAwesomeIcon icon={faTimes}/>
      </div>
      <BurgerMenu menuItems={menuItems} mode={props.mode}/>
    </div>
  );
}

export default Search;
