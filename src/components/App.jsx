import React, { useState } from "react";

function App() {
  const [work, addWork] = useState("");
  const [arrWork, addArrWork] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    addWork(value);
    console.log(work);
  }
  function addValue() {
    addArrWork((prevValue) => [...prevValue, work]);
    addWork("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={work} />
        <button onClick={addValue}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {arrWork.map((work) => (
            <li>{work}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
