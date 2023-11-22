import React from "react";
import Test from "./Test";

function TasksCount(props) {

  return (
    <div>
   
      <p className="lead fs-1 text-center bg-dark text-info">Tasks count</p>
      <p className="lead">{props.tasks.length}</p>
      <Test tasks={props.tasks}/>
    </div>
  );
}

export default TasksCount;
