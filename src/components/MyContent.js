import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../style.css";

class MyContent extends Component {
  render() {
    return (
      <div className="todolist">
        <main>
          <p>Content from MyContent</p>
          <ul>
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
