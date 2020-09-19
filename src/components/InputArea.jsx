import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.onChanged(props.value)}
        type="text"
        value={props.value}
      />
      <button onClick={props.onCliked}>
        <span>Add</span>
      </button>
    </div>
  );
}
export default InputArea;
