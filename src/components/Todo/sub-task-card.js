import React from "react";

const SubTaskCard = ({ task, id, deleteTask }) => {
  return (
    <ul className=" todo-subtask">
    <li >
      <div className="flex">
      <div className="pl10">{task}</div>
      <div  className="icon" onClick={() => deleteTask(id, 2)}>
      <i class="fa fa-trash" aria-hidden="true"/>
      <div className="icon-hover">Delete Subtask</div>
      </div>
      </div>
      </li>
    </ul>
  );
};

export default SubTaskCard;
