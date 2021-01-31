import React, { Component } from "react";
import "../../style.css";

class TodoItem extends Component {
  render() {
    return (
      <div className="todoitem">
        {/*<input type="checkbox" checked={this.props.item.completed} />*/}
        {/*Above line makes checkboxes immutable*/}
        <input type="checkbox" />
        {this.props.item.description}
      </div>
    );
  }
}

export default TodoItem;
