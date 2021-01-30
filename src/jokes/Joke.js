import React from "react";
import PropTypes from "prop-types";

function Joke(props) {
  return (
    <div>
      <p>Question: {props.question}</p>
      <p>Punchline: {props.punchline}</p>
    </div>
  );
}

export default Joke;
