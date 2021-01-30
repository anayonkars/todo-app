import React, { Component } from "react";
import TodoItem from "./TodoItem";

class MyContent extends Component {
  render() {
    var todoItems = [
      "Todo Item",
      "Some another todo item",
      "Yet another todo item",
    ];
    var handleChange = (event) => {
      console.log(event);
    };
    return (
      <div>
        <main>
          <p>Content from MyContent</p>
          <ul>
            {/*{todoItems.map((todoItem) => (
            // <li>{todoItem}</li>
            <div>
              <label>
                <input type="checkBox" onChange={handleChange} />
                {todoItem}
              </label>
              <br />
            </div>
          ))}*/}
            <li>
              <TodoItem />
              <TodoItem />
              <TodoItem />
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default MyContent;
