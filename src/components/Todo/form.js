import React, { useState } from "react";
import { v1 as uuid } from "uuid";

const TodoListForm = ({ addTodo, taskLevel = 1, parentId, placeholder = "Add New task" }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({ id: uuid(), task, parentId }, taskLevel);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo mt10">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder={placeholder}
      />
      <button disabled={!task?.length}>Add</button>
    </form>
  );
};

export default TodoListForm;
