import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function MyApp() {
  return (
    <ul id="foo">
      <li>bar1</li>
      <li>bar2</li>
      <li>bar3</li>
    </ul>
  );
}

ReactDOM.render(MyApp(), document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
