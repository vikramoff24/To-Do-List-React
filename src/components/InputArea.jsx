import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />

      {/* for just calling we can have onClick={props.onCLiked} */}
      {/* to pass value we need to us pass a function which contain that */}

      <button
        onClick={() => {
          setInputText("");
          return props.onClicked(inputText);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
export default InputArea;
