import React from "react";
import todoItemsData from "./todoItemsData";
import TodoItem from "./TodoItem";

function MyApp() {
  const todoItems = todoItemsData.map((todoItem) => (
    <div>
      <TodoItem key={todoItem.id} item={todoItem} />
    </div>
  ));
  return <div className={"todolist"}>{todoItems}</div>;
}

export default MyApp;
