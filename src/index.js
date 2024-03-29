import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./todolist/components/App";

// function onButtonClick() {
//   window.open("http://www.google.com");
// }

// function App() {
//   return (
//     <div>
//       <button onClick={onButtonClick} className="btn btn-primary btn-sm btn-m2">
//         Go
//       </button>
//       {/* <button
//         href="http://www.google.com"
//         className="btn btn-primary btn-sm btn-m2"
//       >
//         Reset
//       </button> */}
//     </div>
//   );
// }

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
