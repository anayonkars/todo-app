import React, { Component } from "react";
import MyContent from "./MyContent";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import MyGreeting from "./MyGreeting";
import todoItemsData from "./todoItemsData";
import TodoItem from "./TodoItem";

function MyApp() {
  const todoItems = todoItemsData.map((todoItem) => (
    <div>
      <TodoItem key={todoItem.id} item={todoItem.description} />
    </div>
  ));
  return (
    <div className={"todolist"}>
      {/*<MyHeader />*/}
      {/*<MyGreeting firstName="Anayonkar" lastName="Shivalkar" />*/}
      {/*<MyContent todoItems={todoItems} />*/}
      {todoItems}
      {/*<MyFooter />*/}
    </div>
  );
}

export default MyApp;
