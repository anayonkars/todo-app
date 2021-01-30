import React, { Component } from "react";
import MyContent from "./MyContent";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import MyGreeting from "./MyGreeting";

function MyApp() {
  const todoItems = [
    "Todo Item",
    "Some another todo item",
    "Yet another todo item",
  ];
  return (
    <div>
      <MyHeader />
      <MyGreeting firstName="Anayonkar" lastName="Shivalkar" />
      <MyContent todoItems={todoItems} />
      <MyFooter />
    </div>
  );
}

export default MyApp;
