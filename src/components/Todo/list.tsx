import React, { useState } from "react";
import TaskCard from "./task-card";
import TodoListForm from "./form";

interface Task {
  id: string;
  parentId?: string;
  task: string;
  subTasks?: Task[];
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addList = (newTask: Task, taskLevel = 1) => {
    if (!newTask) {
      return;
    }

    if (taskLevel === 1) {
      setTasks([...tasks, newTask]);
    } else {
      const parentId = newTask.parentId;

      const updatedTasks = tasks.reduce((todosList: Task[], todo: Task) => {
        if (todo.id === parentId) {
          todo.subTasks = todo.subTasks ? [...todo.subTasks, newTask] : [newTask];

          return todosList.concat(todo);
        }
        return todosList.concat(todo);
      }, []);
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id: string, taskLevel = 1) => {
    let filteredTasks: Task[] = tasks.filter((task: Task) => task.id !== id);
    if (taskLevel === 2) {
      filteredTasks = tasks.reduce((updatedTasks: Task[], task: Task) => {
        task.subTasks = task.subTasks?.filter(({ id: taskId }) => id !== taskId);
        return updatedTasks.concat(task);
      }, []);
    }
    setTasks(filteredTasks);
  };

  const renderTaskList = tasks.map((data: Task) => {
    return (
      <TaskCard key={data.id} {...data} deleteTask={deleteTask} addList={addList} />
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
