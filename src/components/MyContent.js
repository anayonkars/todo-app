import React, { Component } from "react";

function MyContent() {
  var todoItems = [
    "Todo Item",
    "Some another todo item",
    "Yet another todo item",
  ];
  return (
    <div>
      <main>
        <p>Content from MyContent</p>
        <ul>
          {todoItems.map((todoItem) => (
            // <li>{todoItem}</li>
            <div>
              <label>
                <input type="checkBox" />
                {todoItem}
              </label>
              <br />
            </div>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default MyContent;
