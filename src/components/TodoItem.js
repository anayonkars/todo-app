import React, { Component } from "react";
import PropTypes from "prop-types";
import "../style.css";

class TodoItem extends Component {
  render() {
    return (
      <div className="todoitem">
        <label>
          <input type="checkbox" />
          {this.props.item}
        </label>
      </div>
    );
  }
}

export default TodoItem;
