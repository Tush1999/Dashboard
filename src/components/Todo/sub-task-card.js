import React from "react";

const SubTaskCard = ({ task, id, deleteTask }) => {
  return (
    <div>
      <div>{task}</div>
      <div onClick={() => deleteTask(id, 2)}>Delete</div>
    </div>
  );
};

export default SubTaskCard;
