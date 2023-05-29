import React, { useState } from "react";

import SubTask from "./sub-task-card";
import TodoListForm from "./form";

const TaskCard = ({ task, id, deleteTask, subTasks, addList }) => {
  const [addSubTasks, setAddSubTasks] = useState(false);

  const renderSubTasks = subTasks?.map((data) => {
    return <SubTask key={data.id} {...data} deleteTask={deleteTask} />;
  });

  return (
    <div>
      <div>{task}</div>
      <div onClick={() => deleteTask(id)}>delete task</div>
      <button onClick={() => setAddSubTasks(true)}>Add SubTasks</button>
      {addSubTasks && (
        <TodoListForm taskLevel={2} addTodo={addList} parentId={id} />
      )}
      {renderSubTasks}
    </div>
  );
};

export default TaskCard;
