import React, { useState } from "react";
import BurgerMenuItem from "./BurgerMenuItem";
import OutsideClickHandler from "react-outside-click-handler";

function BurgerMenu(props) {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(null);

  function checkTime(value) {
    let timeNow = new Date().getTime();

    // Delay for changing object state
    if (time + 500 < timeNow && value !== false) {
      setTime(timeNow);
      setOpen(!open);
    } else if (time + 500 < timeNow && value === false) {
      setOpen(value);
    }
  }

  return (
    <div className="burgerMenu">
      <OutsideClickHandler onOutsideClick={() => checkTime(false)}>
        <div className="burgerMenu__container" onClick={checkTime}>
          <div
            className={
              open
                ? props.mode
                  ? "burgerMenu__switcher burgerMenu__switcher_open"
                  : "burgerMenu__switcher burgerMenu__switcher_night burgerMenu__switcher_open"
                : props.mode
                ? "burgerMenu__switcher"
                : "burgerMenu__switcher burgerMenu__switcher_night"
            }
          >
            <i></i>
          </div>
        </div>
        <div
          className={
            open
              ? props.mode
                ? "burgerMenu__content burgerMenu__content_open"
                : "burgerMenu__content burgerMenu__content_night burgerMenu__content_open"
              : props.mode
              ? "burgerMenu__content"
              : "burgerMenu__content burgerMenu__content_night"
          }
        >
          <BurgerMenuItem menuItems={props.menuItems} />
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default BurgerMenu;
