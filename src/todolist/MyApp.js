import React, { Component } from "react";
import todoItemsData from "./todoItemsData";
import TodoItem from "./TodoItem";

class MyApp extends Component {
  render() {
    const todoItems = todoItemsData.map((todoItem) => (
      <div>
        <TodoItem key={todoItem.id} item={todoItem} />
      </div>
    ));
    return <div className={"todolist"}>{todoItems}</div>;
  }
}

export default MyApp;
