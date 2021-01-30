import React from "react";
import PropTypes from "prop-types";
import Joke from "./Joke";

function App(props) {
  return (
    <div>
      <h1>Below are the jokes</h1>
      <Joke question={"some question"} punchline={"some punchline"} />
      <br />
      <Joke punchline={"some punchline"} />
      <br />
      <Joke question={"some question"} />
      <br />
      <Joke question={"some question"} punchline={"some punchline"} />
      <br />
      <Joke question={"some question"} punchline={"some punchline"} />
    </div>
  );
}

export default App;
