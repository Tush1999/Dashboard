import React, { useState } from "react";

import SubTask from "./sub-task-card";
import TodoListForm from "./form";

const TaskCard = ({ task, id, deleteTask, subTasks, addList }) => {
  const [addSubTasks, setAddSubTasks] = useState(false);

  const renderSubTasks = subTasks?.map((data) => {
    return <SubTask key={data.id} {...data} deleteTask={deleteTask} />;
  });

  return (
    <div className="todo-list">
      <div className="flex todo-task ">  
      <div className="flex">
      <a onClick={() => setAddSubTasks(true)} className="icon"><i class="fa fa-plus"></i>
      <div className="icon-hover">Add Subtask</div>
      </a>     
         <div className="todo-taskNAme">{task}</div>
         </div>
         <div className="flex">
      <div className="icon" onClick={() => deleteTask(id)}> <i class="fa fa-trash" aria-hidden="true"></i>
      <div className="icon-hover">Delete task</div>
</div>
      
      </div>
      </div>

     
      {renderSubTasks}
      {addSubTasks && (
        <TodoListForm taskLevel={2} addTodo={addList} parentId={id} placeholder="Add Subtask"/>
      )}
    </div>
  );
};

export default TaskCard;
