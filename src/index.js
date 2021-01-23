import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function MyApp() {
  var elements = ["bar1", "bar2", "bar3"];
  return (
    <div>
      <ul id="foo">
        {elements.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(MyApp(), document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
