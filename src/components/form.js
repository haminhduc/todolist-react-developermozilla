import React from "react";
import { useState } from "react";

function Form(props) {
  const [newTask, setNewTask] = useState("");
  function handleChange(event) {
    event.preventDefault();
    setNewTask(event.target.value);
    console.log(newTask);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(newTask);
    setNewTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label className="" htmlFor={props.id}></label>
      </h2>
      <div className="adding-section">
        <input
          id={props.id}
          type="text"
          name="text"
          onChange={handleChange}
          autoComplete="off"
          value={newTask}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Form;
