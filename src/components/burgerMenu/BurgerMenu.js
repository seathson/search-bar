import React, { useState } from "react";

function BurgerMenu(props) {
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState(null)

  function checkTime() {
    let timeNow = new Date().getTime()

    if (time + 500 < timeNow) {
      setTime(timeNow)
      setOpen(!open)
    }
  }

  return (
    <div className="burgerMenu" onClick={checkTime}>
      <div className="burgerMenu__container">
        <div className={open ? "burgerMenu__switcher burgerMenu__switcher_open" : "burgerMenu__switcher"}>
          <i></i>
        </div>
        <div className={open ? "burgerMenu__content burgerMenu__content_open" : "burgerMenu__content"}>
        
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
