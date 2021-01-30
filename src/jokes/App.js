import React from "react";
import PropTypes from "prop-types";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App(props) {
  return (
    <div>
      <h1>Below are the jokes</h1>
      {jokesData.map((joke) => (
        <div>
          <Joke
            id={joke.id}
            question={joke.question}
            punchline={joke.punchline}
          />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
