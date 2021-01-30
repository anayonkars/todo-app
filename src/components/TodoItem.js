import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" />
          {this.props.item}
        </label>
      </div>
    );
  }
}

export default TodoItem;