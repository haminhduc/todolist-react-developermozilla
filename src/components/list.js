import React from "react";
import { useState } from "react";
function List(props) {
  // console.log(props.name);
  // console.log(props.id);
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setNewTaskName(event.target.value);
    console.log(event.target.value);
  }
  function handleCancel() {
    setIsEditing(false);
    setNewTaskName("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(newTaskName);
    props.editTask(props.id, newTaskName);
    setNewTaskName("");
    setIsEditing(false);
  }

  const displayTasks = (
    <div className="job job-display">
      <div className="job-button">
        <input
          type="checkbox"
          id="nameDisplay"
          defaultChecked={props.completed}
          onChange={() => props.taskComplete(props.id)}
        />
        <label className="job-text" htmlFor="nameDisplay">
          {props.name}
        </label>
      </div>
      <div className="interact-buttons">
        <button
          type="button"
          className="btn"
          onClick={() => setIsEditing(true)}
        >
          edit
        </button>{" "}
        <button type="button" onClick={() => props.removeTask(props.id)}>
          delete
        </button>
      </div>
    </div>
  );

  const displayEditing = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-task"
        onChange={handleChange}
        value={newTaskName}
      />
      <button type="button" className="btn" onClick={handleCancel}>
        Cancel
      </button>
      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
  return (
    <li className="jobs-list">{isEditing ? displayEditing : displayTasks}</li>
  );
}

export default List;
