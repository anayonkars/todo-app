import React from "react";
import PropTypes from "prop-types";
import Joke from "./Joke";

function App(props) {
  return (
    <div>
      <h1>Below are the jokes</h1>
      <Joke />
    </div>
  );
}

export default App;
