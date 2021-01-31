import React, { Component } from "react";
import "../style.css";

class TodoItem extends Component {
  render() {
    return (
      <div className="todoitem">
        <input type="checkbox" checked={this.props.item.completed} />
        {this.props.item.description}
      </div>
    );
  }
}

export default TodoItem;
