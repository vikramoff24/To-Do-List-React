import React, { useState } from "react";

function ToDoItem(props) {
  const [strike, AddStrike] = useState(false);

  function handleClick() {
    strike ? AddStrike(false) : AddStrike(true);
  }

  return (
    <li
      style={
        strike && {
          textDecoration: "line-through"
        }
      }
      onClick={handleClick}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
