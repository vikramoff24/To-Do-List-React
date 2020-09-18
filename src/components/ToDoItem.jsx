import React, { useState } from "react";

function ToDoItem(props) {
  const [strike, AddStrike] = useState(false);

  function handleClick() {
    AddStrike((prevValue) => !prevValue);
  }

  return (
    <li
      style={{ textDecoration: strike ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
