import React, { useState } from "react";

const { v4 } = require("uuid")

interface TodoListFormProps {
  addTodo: (todo: Todo, taskLevel: number) => void;
  taskLevel?: number;
  parentId?: string;
  placeholder?: string;
}

interface Todo {
  id: string;
  task: string;
  parentId?: string;
}

const TodoListForm: React.FC<TodoListFormProps> = ({
  addTodo,
  taskLevel = 1,
  parentId,
  placeholder = "Add New task",
}) => {
  const [task, setTask] = useState("");

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    addTodo(
      { id: v4(), task, parentId: parentId },
      taskLevel
    );
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