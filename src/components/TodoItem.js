import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" />
        <p>Placeholder text here</p>
      </div>
    );
  }
}

export default TodoItem;
