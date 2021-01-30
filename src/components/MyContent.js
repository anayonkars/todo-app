import React, { Component } from "react";
import TodoItem from "./TodoItem";

class MyContent extends Component {
  render() {
    return (
      <div>
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
