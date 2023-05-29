import React, { useState } from "react";
import { v1 as uuid } from "uuid";

const TodoListForm = ({ addTodo, taskLevel = 1, parentId }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({ id: uuid(), task, parentId }, taskLevel);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add your todo list</label>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoListForm;
