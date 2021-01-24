import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function onButtonClick() {
  window.open("http://www.google.com");
}

function MyApp() {
  return (
    <div>
      <button onClick={onButtonClick} className="btn btn-primary btn-sm btn-m2">
        Go
      </button>
      {/* <button
        href="http://www.google.com"
        className="btn btn-primary btn-sm btn-m2"
      >
        Reset
      </button> */}
    </div>
  );
}

function MyInfo() {
  var vacactionSpots = ["Asia", "Europe", "America"];
  return (
    <React.Fragment>
      <h1>Anayonkar Shivalkar</h1>
      <p>Software Architect & Developer</p>
      <ul>
        {vacactionSpots.map((vacationSpot) => (
          <li>{vacationSpot}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
