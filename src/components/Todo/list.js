import React, { useState } from "react";

import TaskCard from "./task-card";
import TodoListForm from "./form";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addList = (newTask, taskLevel = 1) => {
    if (!newTask) {
      return;
    }

    if (taskLevel === 1) {
      setTasks([...tasks, newTask]);
    } else {
      const parentId = newTask.parentId;

      const updatedTasks = tasks.reduce((todosList, todo) => {
        if (todo.id === parentId) {
          todo.subTasks = todo.subTasks
            ? [...todo.subTasks, newTask]
            : [newTask];

          return todosList.concat(todo);
        }
        return todosList.concat(todo);
      }, []);
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id, taskLevel = 1) => {
    let filteredTasks = tasks.filter((task) => task.id !== id);
    if (taskLevel === 2) {
      filteredTasks = tasks.reduce((updatedTasks, task) => {
        task.subTasks = task.subTasks?.filter(
          ({ id: taskId }) => id !== taskId
        );
        return updatedTasks.concat(task);
      }, []);
    }
    setTasks(filteredTasks);
  };

  const renderTaskList = tasks.map((data) => {
    return (
      <TaskCard
        key={data.id}
        {...data}
        deleteTask={deleteTask}
        addList={addList}
      />
    );
  });

  return (
    <div>
      <TodoListForm addTodo={addList} />
      {renderTaskList}
    </div>
  );
};

export default TodoList;
