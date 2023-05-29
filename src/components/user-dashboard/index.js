import React from "react";
import Header from "../header";
import TodoList from "../Todo/list";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="container py30">
      <div className="main-head">Dashboard</div>
      <TodoList />
      </div>
    </div>
  );
};

export default Dashboard;
