import React, { Component } from "react";
import PropTypes from "prop-types";
import "../style.css";

function TodoItem(props) {
  return (
    <div className="todoitem">
      <input type="checkbox" />
      {props.item}
    </div>
  );
}

export default TodoItem;
