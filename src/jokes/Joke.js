import React from "react";
import PropTypes from "prop-types";

function Joke(props) {
  return (
    <div>
      {props.id ? <p>Id : {props.id}</p> : <p>There is no id</p>}
      {props.question ? (
        <p>Question: {props.question}</p>
      ) : (
        <p>There is no question</p>
      )}
      {props.punchline ? (
        <p>Punchline : {props.punchline}</p>
      ) : (
        <p>There is no punchline</p>
      )}
    </div>
  );
}

export default Joke;
