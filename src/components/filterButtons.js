import React from "react";

function FilterButtons() {
  return (
    <div className="filter-section">
      <button className="filter-button">All</button>
      <button className="filter-button">Active</button>
      <button className="filter-button">Completed</button>
    </div>
  );
}

export default FilterButtons;
