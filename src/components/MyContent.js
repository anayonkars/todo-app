import React, { Component } from "react";
import TodoItem from "./TodoItem";

class MyContent extends Component {
  render() {
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
            {/*<li>
              <TodoItem item="Todo Item" />
              <TodoItem item="Some another todo item" />
              <TodoItem item="yet another todo item" />
            </li>*/}
            {this.props.todoItems.map((todoItem) => (
              <TodoItem item={todoItem} />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default MyContent;
