import React from "react";

const Task = (props) => {
  return (
    <div>
      <h3>{props.actionType} Action Selected</h3>
      <input id="task" type="text" placeholder={props.inputType} />
      <button onClick={props.action}>{props.actionType}</button>
    </div>
  );
};

export default Task;
