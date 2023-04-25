import React, { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">Details</label>
      <input
        id="text-input"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <label htmlFor="category-select">Category</label>
      <select
        id="category-select"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
