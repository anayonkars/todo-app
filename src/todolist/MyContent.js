import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import "../style.css";

function MyContent(props) {
  return (
    <div className="todolist">
      <main>
        <ul>
          {props.todoItems.map((todoItem) => (
            <TodoItem item={todoItem} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default MyContent;
