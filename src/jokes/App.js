import React from "react";
import PropTypes from "prop-types";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App(props) {
  const jokes = jokesData.map((joke) => (
    <div>
      <Joke
        key={joke.id}
        id={joke.id}
        question={joke.question}
        punchline={joke.punchline}
      />
      <hr />
    </div>
  ));
  return (
    <div>
      <h1>Below are the jokes</h1>
      {/*{jokesData.map((joke) => (
        <div>
          <Joke
            id={joke.id}
            question={joke.question}
            punchline={joke.punchline}
          />
          <hr />
        </div>
      ))}*/}
      {jokes}
    </div>
  );
}

export default App;
