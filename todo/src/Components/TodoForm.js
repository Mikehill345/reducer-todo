import React, { useState } from "react";

export default function TodoForm(props) {

  const [newTodoItem, setNewTodoItem] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.add(newTodoItem);
    setNewTodoItem("");
  };

  const onChange = (e) => {
      e.preventDefault()
      setNewTodoItem(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="item"
        value={newTodoItem}
        placeholder="Type in your Todo - Click 'Add' to add it to your list"
        onChange={onChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}