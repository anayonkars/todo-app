import React from "react";
import "../style.css";

function TodoItem(props) {
  return (
    <div className="todoitem">
      <input type="checkbox" checked={props.item.completed} />
      {props.item.description}
    </div>
  );
}

export default TodoItem;
