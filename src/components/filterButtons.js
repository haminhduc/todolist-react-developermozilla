import React from "react";

function FilterButtons(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter()}
    >
      {/* <span className="visually-hidden">Show </span> */}
      <span>{props.name} </span>
      {/* <span className="visually-hidden"> tasks</span> */}
    </button>
  );
}

export default FilterButtons;
