import React, { Component } from "react";
import PropTypes from "prop-types";
import "../style.css";

class TodoItem extends Component {
  render() {
    return (
      <div className="todoitem">
        <input type="checkbox" />
        {this.props.item}
      </div>
    );
  }
}

export default TodoItem;
