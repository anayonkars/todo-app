import React from "react";
import PropTypes from "prop-types";
import Joke from "./Joke";

function App(props) {
  return (
    <div>
      <h1>Below are the jokes</h1>
      <Joke question={"some question"} punchline={"some punchline"} />
      <hr />
      <Joke punchline={"some punchline"} />
      <hr />
      <Joke question={"some question"} />
      <hr />
      <Joke question={"some question"} punchline={"some punchline"} />
      <hr />
      <Joke />
    </div>
  );
}

export default App;
