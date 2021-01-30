import React from "react";
import PropTypes from "prop-types";

function Joke(props) {
  return (
    <div>
      {props.question ? <p>Question: {props.question}</p> : null}
      <p style={{ display: !props.punchline && "none" }}>
        Punchline: {props.punchline}
      </p>
    </div>
  );
}

export default Joke;
