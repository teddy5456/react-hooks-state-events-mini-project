import React from "react";

function Task({ text, category, onDeleteTask }) {
  function handleDeleteClick() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="category">{category}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
