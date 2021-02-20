import React from "react";

function BurgerMenuItem(props) {
  return (
    <div className="burgerMenuItem__container">
      {props.menuItems.map((item) => (
        <div key={item.id} className="burgerMenuItem__item">
          <div className='burgerMenuItem__text'>{item.text}</div>
          <div className='burgerMenuItem__change'>{item.change}</div>
        </div>
      ))}
    </div>
  );
}

export default BurgerMenuItem;
