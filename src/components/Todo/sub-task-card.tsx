import React from "react";

interface SubTaskCardProps {
  task: string;
  id: string;
  deleteTask: (id: string, taskLevel: number) => void;
}

const SubTaskCard: React.FC<SubTaskCardProps> = ({ task, id, deleteTask }) => {
  return (
    <ul className="todo-subtask">
      <li>
        <div className="flex">
          <div className="pl10">{task}</div>
          <div className="icon" onClick={() => deleteTask(id, 2)}>
            <i className="fa fa-trash" aria-hidden="true" />
            <div className="icon-hover">Delete Subtask</div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SubTaskCard;
